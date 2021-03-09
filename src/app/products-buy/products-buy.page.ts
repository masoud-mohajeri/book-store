import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/services/books.service';

@Component({
  selector: 'app-products-buy',
  templateUrl: './products-buy.page.html',
  styleUrls: ['./products-buy.page.scss'],
})
export class ProductsBuyPage implements OnInit, OnDestroy {
  books: Book[];
  subs: Subscription[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.subs.push(
      this.bookService.bookEmitter.subscribe((bookArray: Book[]) => {
        this.books = bookArray;
      })
    );
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
