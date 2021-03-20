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
  needSpinner = true;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    new Promise((resolve, reject) => {
      this.bookService.returnBookById(this.order.bookId).subscribe((book) => {
        resolve(book);
      });
    }).then((b: Book) => {
      this.book = b;
      this.needSpinner = false;
    });
  }
}
