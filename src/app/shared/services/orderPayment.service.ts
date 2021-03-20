import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlexOrderStyleBuilder } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book.model';
import { Order } from '../order.model';
import { User } from '../user.model';
import { AuthService } from './auth.service';
import { BookService } from './books.service';
import { ShCardService } from './shcard.service';
import { take, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrderPaymentService {
  orders: Order[] = [];
  orderEmitter = new BehaviorSubject<Order[]>(this.orders);
  paymentOk = new BehaviorSubject<boolean>(true);
  shCard: string[] = [];
  user: User;
  constructor(
    private shcardService: ShCardService,
    private authService: AuthService,
    private bookService: BookService,
    private afs: AngularFirestore
  ) {}

  payOrder(bookId: string, count: number) {
    //  if auth
    const theId = this.orders.findIndex((ord) => ord.bookId === bookId);
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    this.orders[theId].status = 'PAIED';
    this.orders[theId].customerAssredd = this.user.address;
    this.orders[theId].customeName = this.user.name;
    this.orders[theId].count = count;
    this.bookService.decreassInvestory(this.orders[theId].bookId, count);
    console.log(this.orders[theId]);
    this.orderEmitter.next(this.orders);
    //
    this.afs
      .collection<Order>('Orders')
      .add(this.orders[theId])
      .then((res) => {
        console.log('paied successfully');
        console.log(res);
      })
      .catch((res) => {
        console.log('couldnt pay');
        console.log(res);
      });
  }

  getAllOrdersUser() {
    this.orders = [];
    this.shcardService.cardListEmitter.subscribe((card) => {
      this.shCard = card;
    });
    let OL: Order[] = [];
    return new Promise((resolve, reject) => {
      for (let book of this.shCard) {
        new Promise((resolve, reject) => {
          this.bookService.returnBookById(book).subscribe((aBook) => {
            resolve(aBook);
          });
        })
          .then((aBook: Book) => {
            const newOrder: Order = {
              bookId: book,
              count: 1,
              publisher: aBook.publisher,
              status: 'CARD',
            };
            OL.push(newOrder);
          })
          .catch((err) => {
            console.log('err');
            console.log(err);
          });
      }
      this.orders = OL;
      this.orderEmitter.next(this.orders);
      resolve(this.orders);
    });
  }

  deleteOrder(OrderId: string) {
    const theId = this.orders.findIndex((ord) => ord.bookId === OrderId);
    this.orders.splice(theId, 1);
    this.orderEmitter.next(this.orders);
  }

  getPublisherOrder() {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    return new Promise((resolve, reject) => {
      this.afs
        .collection('Orders', (ref) =>
          ref
            .where('publisher', '==', this.user.name)
            .where('status', '==', 'PAIED')
        )
        .snapshotChanges()
        .pipe(
          take(1),
          map((action) => {
            return action.map((a) => {
              return {
                ...(a.payload.doc.data() as object),
                id: a.payload.doc.id,
              };
            });
          })
        )
        .subscribe((orderList) => {
          resolve(orderList);
        });
    });
  }

  sendPaiedOrder(orderId: string, postId: number) {
    return this.afs
      .doc<Order>('Orders/' + orderId)
      .update({ status: 'SENT', postId: postId, paymentDate: Date.now() });
  }

  getAllOrders() {
    this.afs
      .collection('Orders')
      .valueChanges()
      .subscribe((O: Order[]) => {
        this.orderEmitter.next(O);
      });

    // return this.orderEmitter;
    return this.afs.collection('Orders').valueChanges();
  }

  getPaiedOrdersUser() {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
    return this.afs
      .collection<Order>('Orders', (ref) =>
        ref.where('customeName', '==', this.user.name)
      )
      .valueChanges();
  }
}
