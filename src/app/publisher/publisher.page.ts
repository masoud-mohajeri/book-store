import { Component, OnInit, Output } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/services/books.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.page.html',
  styleUrls: ['./publisher.page.scss'],
})
export class PublisherPage implements OnInit {
  books: Book[];
  pageStatus = 'books';
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.bookEmitter.subscribe((books) => {
      this.books = books;
    });
    // this.books = this.bookService.getAllBooks();
  }
  segmentChanged(value) {
    this.pageStatus =value.detail.value;
    // console.log(this.pageStatus);
  }
}
