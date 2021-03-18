import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.model';
import { UIService } from './ui.service';

@Injectable({ providedIn: 'root' })
export class PublishersService {
  publishers: User[] = [];
  publisherEmitter = new BehaviorSubject<User[]>(null);

  constructor(private afs: AngularFirestore, private uiService: UIService) {}

  getAllPublishers() {
    return this.afs
      .collection<User>('Publisher')
      .valueChanges({ idField: 'id' });
  }

  changePublisherStatus(status: boolean, pubId: string) {
    this.afs
      .doc('Publisher/' + pubId)
      .update({ activatedStatus: status })
      .then(() => {
        if (status) {
          this.uiService.presentToast('ناشر با موفقیت تایید شد ');
        } else {
          this.uiService.presentToast('ناشر با موفقیت مسدود شد ');
        }
      })
      .catch((err) => {
        this.uiService.presentToast('مشکلی در تغییر وضعیت ناشر وجود دارد ');
        throw new Error(err);
      });
  }

  returnPublisherById(id: string) {
    let theId = this.publishers.findIndex((pub) => pub.id === id);
    return this.publishers[theId];
  }
}
