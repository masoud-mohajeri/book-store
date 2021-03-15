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
  publisher: User;
  constructor(
    private publisherService: PublishersService,
    private booksService: BookService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.book = this.booksService.returnBookById(this.order.bookId);
    this.publisher = this.publisherService.returnPublisherById(
      this.order.publisherId
    );
  }
}
