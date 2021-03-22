import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.model';
import { UIService } from './ui.service';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuth = new BehaviorSubject<boolean>(false);
  userInfo = new BehaviorSubject<User>(null);

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UIService,
    private loadingController: LoadingController
  ) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.loadingController
        .create({ message: 'لطفا کمی صبر کنید ' })
        .then((loadingEl) => {
          loadingEl.present();
          this.afAuth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              new Promise((resolve, reject) => {
                this.afs
                  .collection<User>('User', (ref) =>
                    ref.where('email', '==', email)
                  )
                  .valueChanges({ idField: 'id' })
                  .subscribe((user) => {
                    resolve(user[0]);
                  });
              }).then((user: User) => {
                // console.log(user);
                this.userInfo.next(user);
                this.isAuth.next(true);
                loadingEl.dismiss();
                this.uiService.presentToast('خوش آمدید ');
                resolve(user);
              });
            })
            .catch((err) => {
              loadingEl.dismiss();
              this.uiService.presentToast(err);
              console.error(err);
            });
        });
    });
  }

  signUp(signupInfo) {
    this.loadingController
      .create({ message: 'لطفا کمی صبر کنید ' })
      .then((loadingEl) => {
        loadingEl.present();

        const newUser: User = {
          name: signupInfo.name,
          address: signupInfo.address,
          email: signupInfo.email,
          status: signupInfo.status,
        };
        this.afAuth
          .createUserWithEmailAndPassword(
            signupInfo.email,
            signupInfo.password1
          )
          .then(() => {
            new Promise((resolve, reject) => {
              this.afs
                .collection<User>('User')
                .add(newUser)
                .then(() => {
                  resolve('success');
                });
            }).then(() => {
              new Promise((resolve, reject) => {
                this.afs
                  .collection<User>('User', (ref) =>
                    ref.where('email', '==', newUser.email)
                  )
                  .valueChanges({ idField: 'id' })
                  .subscribe((user) => {
                    resolve(user[0]);
                  });
              }).then((user: User) => {
                this.userInfo.next(user);
                this.isAuth.next(true);
                loadingEl.dismiss();
                this.uiService.presentToast('کاربر با موفقیت ثبت شد ');
                this.router.navigate(['']);
              });
            });
          })
          .catch((err) => {
            this.uiService.presentToast(err);
            loadingEl.dismiss();
          });
      });
  }

  logOut() {
    this.afAuth.signOut().then(() => {
      this.userInfo.next(null);
      this.isAuth.next(false);
      this.uiService.presentToast('خروج موفقیت آمیز بود');
      this.router.navigate(['']);
    });
  }

  saveAddress(address: string) {
    let theUser: User = null;
    this.userInfo.subscribe((user: User) => {
      theUser = user;
    });

    this.afs
      .doc<User>('User/' + theUser.id)
      .update({ address: address })
      .then(() => {
        this.uiService.presentToast('آدرس با موفقیت تغییر کرد ');
      })
      .catch(() => {
        this.uiService.presentToast(
          'تغییر آدرس موفقیت آمیز نبود ، لطفا دوباره امتحان کنید '
        );
      });
  }
}
