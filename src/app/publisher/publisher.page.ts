import { Component, OnInit, Output } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Book } from '../shared/book.model';
import { Order } from '../shared/order.model';
import { AuthService } from '../shared/services/auth.service';
import { BookService } from '../shared/services/books.service';
import { OrderPaymentService } from '../shared/services/orderPayment.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.page.html',
  styleUrls: ['./publisher.page.scss'],
})
export class PublisherPage implements OnInit {
  books: Book[];
  pageStatus = 'books';
  orders: Order[] = [];
  userInfo: User;
  constructor(
    private bookService: BookService,
    private orderPaymentService: OrderPaymentService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.bookService.bookEmitter.subscribe((books) => {
      this.books = books;
    });
    this.orderPaymentService.getPublisherOrder().subscribe((orders) => {
      this.orders = orders;
    });
    this.authService.userInfo.subscribe((info) => {
      this.userInfo = info;
    });
  }
  segmentChanged(value) {
    this.pageStatus = value.detail.value;
    // console.log(this.pageStatus);
  }
}
