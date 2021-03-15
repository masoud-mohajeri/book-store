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
  paymentOk = new BehaviorSubject<boolean>(true);
  shCard: number[] = [];
  user: User;
  constructor(
    private shcardService: ShCardService,
    private authService: AuthService,
    private bookService: BookService
  ) {}

  payOrder(orderId: number, count: number) {
    //  if auth
    const theId = this.orders.findIndex((ord) => ord.orderId === orderId);
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.orders[theId].status = 'PAIED';
    this.orders[theId].customerAssredd = this.user.address;
    this.orders[theId].count = count;
    this.orderEmitter.next(this.orders);
    this.bookService.decreassInvestory(this.orders[theId].bookId, count);
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

  getPublisherOrder() {
    // in the name of firebase
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    //
    let fakeOrders: Order[] = [
      {
        orderId: 1,
        bookId: 1,
        count: 2,
        publisherId: 1,
        status: 'PAIED',
        customerAssredd: 'سینتب سینتسهع اسهع یبعهلیبلعا  بال',
        paymentDate: 21313123,
      },
      {
        orderId: 2,
        bookId: 2,
        count: 2,
        publisherId: 1,
        status: 'PAIED',
        customerAssredd: 'سینتب سینتسهع اسهع یبعهلیبلعا  بال',
        paymentDate: 21313123,
      },
    ];
    // in the name of firebase : just paied
    this.orders = fakeOrders;
    this.orderEmitter.next(this.orders);
    return this.orderEmitter;
  }

  sendPaiedOrder(orderId: number, postId: number) {
    const theId = this.orders.findIndex((ord) => ord.orderId === orderId);
    this.orders[theId].status = 'SENT';
    this.orders[theId].postId = postId;
    this.orderEmitter.next(this.orders);

  }

  getAllOrders() {
    let fakeOrders: Order[] = [
      {
        orderId: 1,
        bookId: 1,
        count: 2,
        publisherId: 1,
        status: 'SENT',
        customerAssredd: 'سینتب سینتسهع اسهع یبعهلیبلعا  بال',
        paymentDate: 21313123,
      },
      {
        orderId: 2,
        bookId: 2,
        count: 2,
        publisherId: 1,
        status: 'PAIED',
        customerAssredd: 'سینتب سینتسهع اسهع یبعهلیبلعا  بال',
        paymentDate: 21313123,
      },
    ];
    // in the name of firebase : just paied
    this.orders = fakeOrders;
    this.orderEmitter.next(this.orders);
    return this.orderEmitter;
  }
}
