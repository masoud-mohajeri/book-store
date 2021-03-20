import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { Order } from 'src/app/shared/order.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BookService } from 'src/app/shared/services/books.service';
import { PublishersService } from 'src/app/shared/services/publishers.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-all-order-history',
  templateUrl: './all-order-history.component.html',
  styleUrls: ['./all-order-history.component.scss'],
})
export class AllOrderHistoryComponent implements OnInit {
  @Input() order: Order;
  book: Book;
  needSpinner = true;
  constructor(
    private publisherService: PublishersService,
    private booksService: BookService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // console.log(this.order);
    new Promise((resolve, reject) => {
      this.booksService.returnBookById(this.order.bookId).subscribe((book) => {
        resolve(book);
      });
    }).then((book: Book) => {
      this.book = book;
      this.needSpinner = false;
    });
  }
}
