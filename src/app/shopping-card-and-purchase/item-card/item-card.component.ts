import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { Order } from 'src/app/shared/order.model';
import { BookService } from 'src/app/shared/services/books.service';
import { OrderPaymentService } from 'src/app/shared/services/orderPayment.service';

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
    private orderPayService: OrderPaymentService
  ) {}

  ngOnInit() {
    this.book = this.bookService.returnBookById(this.order.bookId);
  }
  payThisOrder() {
    this.orderPayService.payOrder(this.order.orderId);
  }
}
