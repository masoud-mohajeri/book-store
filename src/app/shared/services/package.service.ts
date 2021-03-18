import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
import { Package } from '../package.model';
import { BookService } from './books.service';
import { UIService } from './ui.service';

@Injectable({ providedIn: 'root' })
export class PackagesService {
  packages: Package[] = [];
  packageEmitter = new BehaviorSubject<Package[]>(null);
  constructor(
    private bookService: BookService,
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private uiService: UIService
  ) {}

  getAllPackages() {
    return this.afs
      .collection<Package>('Packs')
      .valueChanges({ idField: 'id' });
  }

  addPackage(thePackage: Package): void {
    this.afs
      .collection('Packs')
      .add(thePackage)
      .then((res) => {
        console.log(res);
        this.uiService.presentToast('پک با موفقیت ثبت شد ');
      })
      .catch((err) => {
        this.uiService.presentToast('ثبت پک در سایت موفقیت آمیز نبود ');
        throw new Error(err);
      });
    // this.packages.push(thePackage);
    // this.packageEmitter.next(this.packages);
  }

  async uploadImage(event: any, packName: string) {
    const file = event.target.files[0];
    const filePath = 'Packs' + '/' + packName;
    const ref = this.afStorage.ref(filePath);
    const task = await ref.put(file);
    console.log('upload finished ');
    const ref2 = this.afStorage.ref(filePath);
    const promise = new Promise((resolve, reject) => {
      ref2.getDownloadURL().subscribe((url: string) => {
        console.log(url);
        resolve(url);
      });
    });

    return promise;
    // console.log('await 2 ');
  }

  returnPackageById(id: string) {
    return new Promise<Package>((resolve, reject) => {
      this.afs
        .doc<Package>('Packs/' + id)
        .valueChanges({ idField: 'id' })
        .subscribe((p) => {
          resolve(p);
        });
    });
  }

  updatePackage(thePackage: Package): void {
    this.afs
      .doc<Package>('Packs/' + thePackage.id)
      .update(thePackage)
      .then(() => {
        this.uiService.presentToast('پک با موفقیت آپدیت شد ');
      })
      .catch((err) => {
        this.uiService.presentToast(
          'در آپدیت پک مشکلی پیش آمد ، لطفا دوباره امتحان کنید '
        );
        throw new Error(err);
      });
  }

  deletePackage(id: string): void {
    this.afs
      .doc<Package>('Packs/' + id)
      .delete()
      .then(() => {
        this.uiService.presentToast('پک با موفقیت حذف شد ');
      })
      .catch((err) => {
        this.uiService.presentToast(
          'در حذف پک مشکلی پیش آمد ، لطفا دوباره امتحان کنید '
        );
        throw new Error(err);
      });
  }
}
