import { Component, OnInit, Output } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Book } from '../shared/book.model';
import { Order } from '../shared/order.model';
import { AuthService } from '../shared/services/auth.service';
import { BookService } from '../shared/services/books.service';
import { OrderPaymentService } from '../shared/services/orderPayment.service';
import { User } from '../shared/user.model';
import { map } from 'rxjs/operators';
import { UIService } from '../shared/services/ui.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.page.html',
  styleUrls: ['./publisher.page.scss'],
})
export class PublisherPage implements OnInit {
  books: Book[] = [];
  pageStatus = 'books';
  orders: Order[] = [];
  // userInfo: User;
  userInfo: Observable<User>;

  constructor(
    private bookService: BookService,
    private orderPaymentService: OrderPaymentService,
    private authService: AuthService,
    private uiService: UIService
  ) {}

  ngOnInit() {
    this.uiService.needSpinner.next(true);
    this.bookService.getAllBooks().subscribe(
      (someBook) => {
        this.uiService.needSpinner.next(false);
        this.books = someBook;
      },
      (error) => {
        this.uiService.needSpinner.next(false);
        this.uiService.presentToast('مشکلی در دریافت لیست کتاب ها وجود دارد .');
        throw new Error(error);
      }
    );

    this.orderPaymentService.getPublisherOrder().then((orders: Order[]) => {
      this.orders = orders;
    });
    // this.authService.userInfo.subscribe((info) => {
    //   this.userInfo = info;
    // });
    this.userInfo = this.authService.userInfo.asObservable();
  }
  segmentChanged(value) {
    this.pageStatus = value.detail.value;
    // console.log(this.pageStatus);
  }
}
