import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.model';
import { UIService } from './ui.service';

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
                .valueChanges()
                .subscribe((user) => {
                  resolve(user);
                });
            }).then((user: User) => {
              this.userInfo.next(user);
              this.isAuth.next(true);
              loadingEl.dismiss();
              this.uiService.presentToast('خوش آمدید ');
            });
          })
          .catch((err) => {
            loadingEl.dismiss();
            this.uiService.presentToast(err);
            console.error(err);
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
              this.userInfo.next(newUser);
              this.isAuth.next(true);
              loadingEl.dismiss();
              this.uiService.presentToast('کاربر با موفقیت ثبت شد ');
              this.router.navigate(['']);
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
    console.log(address);
  }
}
