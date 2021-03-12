import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { Package } from 'src/app/shared/package.model';
import { BookService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() package: Package;
  books: Book[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit() {
    for (const bookId of this.package.bookIdArray) {
      this.books.push(this.bookService.returnBookById(bookId));
    }
  }
}
