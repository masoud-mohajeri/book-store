import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/services/books.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-publisher-card',
  templateUrl: './publisher-card.component.html',
  styleUrls: ['./publisher-card.component.scss'],
})
export class PublisherCardComponent implements OnInit {
  @Input() publisher: User;
  books: Book[];
  expanded = false;
  paginationP = 1;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }
  changePublisherStatus() {
    this.publisher.activatedStatus = !this.publisher.activatedStatus;
  }
  expandCollaps() {
    this.expanded = !this.expanded;
  }
}
