import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../order.model';
import { User } from '../user.model';
import { AuthService } from './auth.service';
import { BookService } from './books.service';
import { ShCardService } from './shcard.service';

@Injectable({ providedIn: 'root' })
export class OrderPaymentService {
  orders: Order[] = [];
  orderEmitter = new BehaviorSubject<Order[]>(this.orders);
  shCard: number[] = [];
  user: User;
  constructor(
    private shcardService: ShCardService,
    private authService: AuthService,
    private bookService: BookService
  ) {}

  payOrder(orderId: number) {
    //  if auth
    const theId = this.orders.findIndex((ord) => ord.orderId === orderId);
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.orders[theId].status = 'PAIED';
    this.orders[theId].customerId = this.user.id;
    this.orderEmitter.next(this.orders);
  }

  getAllOrdersUser() {
    this.orders = [];
    this.shcardService.cardListEmitter.subscribe((card) => {
      this.shCard = card;
    });

    for (let book of this.shCard) {
      const theBook = this.bookService.returnBookById(+book);
      const newOrder: Order = {
        bookId: book,
        count: 1,
        orderId: Math.round(Math.random() * 1000 + 1000),
        publisherId: theBook.publisherId,
        status: 'CARD',
      };
      this.orders.push(newOrder);
    }
    this.orderEmitter.next(this.orders);
  }
  deleteOrder(OrderId: number) {
    const theId = this.orders.findIndex((ord) => ord.orderId === OrderId);
    this.orders.splice(theId, 1);

    this.orderEmitter.next(this.orders);
  }

  getPublisherOrder() {}

  getAllOrders() {}
}
