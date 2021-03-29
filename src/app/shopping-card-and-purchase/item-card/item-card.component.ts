import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { Order } from 'src/app/shared/order.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BookService } from 'src/app/shared/services/books.service';
import { OrderPaymentService } from 'src/app/shared/services/orderPayment.service';
import { ShCardService } from 'src/app/shared/services/shcard.service';
import { UIService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() order: Order;
  book: Book;
  needSpinner = true;
  auth = false;
  constructor(
    private bookService: BookService,
    private orderPayService: OrderPaymentService,
    private shCardService: ShCardService,
    private authService: AuthService,
    private uiService: UIService
  ) {}

  ngOnInit() {
    new Promise((resolve, reject) => {
      this.bookService.returnBookById(this.order.bookId).subscribe((aBook) => {
        resolve(aBook);
      });
    }).then((aBook: Book) => {
      this.book = aBook;
      // console.log('aBook:Book item order ', aBook);
      this.needSpinner = false;
    });
    this.authService.isAuth.subscribe((a) => {
      this.auth = a;
    });
  }
  payThisOrder(count: any) {
    if (this.auth) {
      // console.log(this.order);
      this.orderPayService.payOrder(this.order.bookId, count);
      this.shCardService.removeFromCard(this.order.bookId);
    } else {
      this.uiService.presentToast('لطفا وارد شوید ');
    }
  }
  deleteThisOrder() {
    console.log(this.book.id);
    this.orderPayService.deleteOrder(this.order.bookId);
    this.shCardService.removeFromCard(this.order.bookId);
  }
}
