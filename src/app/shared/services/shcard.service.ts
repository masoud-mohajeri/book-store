import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookService } from './books.service';

@Injectable({ providedIn: 'root' })
export class ShCardService {
  cardList = [];
  cardListEmitter = new BehaviorSubject<string[]>(this.cardList);
  constructor(private bookService: BookService) {}

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
    console.log(this.cardList);
    this.cardListEmitter.next(this.cardList);
  }
  removeFromCard(id: string) {
    const theId = this.cardList.findIndex((item) => item === id);
    this.cardList.splice(theId, 1);
    this.cardListEmitter.next(this.cardList);
  }
  clearCard() {
    this.cardList = [];
    this.cardListEmitter.next(this.cardList);
  }
}
