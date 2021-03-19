import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { Order } from 'src/app/shared/order.model';
import { BookService } from 'src/app/shared/services/books.service';
import { OrderPaymentService } from 'src/app/shared/services/orderPayment.service';
import { ShCardService } from 'src/app/shared/services/shcard.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() order: Order;
  book: Book;
  needSpinner = true;
  constructor(
    private bookService: BookService,
    private orderPayService: OrderPaymentService,
    private shCardService: ShCardService
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
  }
  payThisOrder(count: any) {
    console.log(this.order);
    this.orderPayService.payOrder(this.order.bookId, count);
    this.shCardService.removeFromCard(this.order.bookId);
  }
  deleteThisOrder() {
    console.log(this.book.id);
    this.orderPayService.deleteOrder(this.order.bookId);
    this.shCardService.removeFromCard(this.order.bookId);
  }
}
