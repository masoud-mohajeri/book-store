import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookService } from './books.service';
import { UIService } from './ui.service';

@Injectable({ providedIn: 'root' })
export class ShCardService {
  cardList = [];
  cardListEmitter = new BehaviorSubject<string[]>(this.cardList);
  constructor(private bookService: BookService, private uiService: UIService) {}

  addToCard(id: string) {
    this.cardList.push(id);
    const seen = {};
    const ret_arr = [];
    for (let i = 0; i < this.cardList.length; i++) {
      if (!(this.cardList[i] in seen)) {
        ret_arr.push(this.cardList[i]);
        seen[this.cardList[i]] = true;
      }
    }
    this.cardList = ret_arr;
    this.cardListEmitter.next(this.cardList);
    this.uiService.presentToast('کالا به سبد خرید اضافه شد ');
  }

  removeFromCard(id: string) {
    const theId = this.cardList.findIndex((item) => item === id);
    this.cardList.splice(theId, 1);
    this.cardListEmitter.next(this.cardList);
    // this.uiService.presentToast('کالا از سبد خرید حذف شد ');
  }
}
