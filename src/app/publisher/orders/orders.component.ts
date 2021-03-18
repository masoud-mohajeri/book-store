import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/shared/book.model';
import { Order } from 'src/app/shared/order.model';
import { BookService } from 'src/app/shared/services/books.service';
import { OrderPaymentService } from 'src/app/shared/services/orderPayment.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() order: Order;
  theBook: Book;
  postForm: FormGroup;
  constructor(
    private bookService: BookService,
    private orderPaymentService: OrderPaymentService
  ) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      postId: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.minLength(4),
      ]),
    });
    this.bookService.returnBookById(this.order.bookId).subscribe((book) => {
      this.theBook = book;
    });
  }
  sendBook() {
    this.orderPaymentService.sendPaiedOrder(
      this.order.orderId,
      this.postForm.value.postId
    );
  }
}
