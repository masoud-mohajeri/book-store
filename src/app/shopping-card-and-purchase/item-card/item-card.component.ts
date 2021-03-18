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
  constructor(
    private bookService: BookService,
    private orderPayService: OrderPaymentService,
    private shCardService: ShCardService
  ) {}

  ngOnInit() {
    // this.book = this.bookService.returnBookById(this.order.bookId);
  }
  payThisOrder(count: any) {
    this.orderPayService.payOrder(this.order.orderId, count);
    this.shCardService.removeFromCard(this.order.bookId);
  }
  deleteThisOrder() {
    this.orderPayService.deleteOrder(this.order.orderId);
    this.shCardService.removeFromCard(this.order.bookId);
  }
}
