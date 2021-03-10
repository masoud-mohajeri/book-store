import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {
  title: string;
  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.book = this.bookService.returnBookById(+id);
  }
  addToCard() {
    console.log(this.book);
  }
}
