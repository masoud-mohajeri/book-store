import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { Order } from 'src/app/shared/order.model';
import { BookService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  @Input() order: Order;
  book: Book;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.book = this.bookService.returnBookById(this.order.bookId);
  }
}
