import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Publisher } from '../publisher.model';

@Injectable({ providedIn: 'root' })
export class PublishersService {
  publishers: Publisher[] = [
    {
      id: 1,
      name: 'نور',
      address:
        ' · اسطوره و تاریخ · اقتصاد و آمار · بهداشت و تغذیه · تصویر و متن · جامعه‌شناسی و علوم اجتماعی · دین و مذهب · روانشناسی · زندگی‌نامه و خاطرات · ',
      activatedStatus: false,
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
    {
      id: 2,
      name: 'چشمه',
      address:
        ' · اسطوره و تاریخ · اقتصاد و آمار · بهداشت و تغذیه · تصویر و متن · جامعه‌شناسی و علوم اجتماعی · دین و مذهب · روانشناسی · زندگی‌نامه و خاطرات · ',
      activatedStatus: false,
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
    {
      id: 3,
      name: 'ثالث',
      address:
        ' · اسطوره و تاریخ · اقتصاد و آمار · بهداشت و تغذیه · تصویر و متن · جامعه‌شناسی و علوم اجتماعی · دین و مذهب · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه · روانشناسی · زندگی‌نامه و خاطرات · ',
      activatedStatus: false,
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
    {
      id: 4,
      name: 'ققنوس',
      address:
        ' نمسیبت سنمیتب سمنیتبس بنمسیبت سنمیتب سمنیتبس بنمسیبت سنمیتب سمنیتبس بنمسیبت سنمیتب سمنیتبس بنمسیبت سنمیتب سمنیتبس بنمسیبت سنمیتب سمنیتبس بنمسیبت سنمیتب سمنیتبس ب ',
      activatedStatus: true,
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
  ];
  publisherEmitter = new BehaviorSubject<Publisher[]>(null);

  getAllPublishers() {
    this.publisherEmitter.next(this.publishers);
    return this.publisherEmitter;
  }
}
