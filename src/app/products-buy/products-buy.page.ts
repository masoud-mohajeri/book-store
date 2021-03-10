import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../shared/book.model';
import { Package } from '../shared/package.model';
import { BookService } from '../shared/services/books.service';
import { PackagesService } from '../shared/services/package.service';

@Component({
  selector: 'app-products-buy',
  templateUrl: './products-buy.page.html',
  styleUrls: ['./products-buy.page.scss'],
})
export class ProductsBuyPage implements OnInit, OnDestroy {
  books: Book[];
  subs: Subscription[] = [];
  slideOpts = {
    initialSlide: 1,
    slidesPerView: Math.round(window.innerWidth / 285),
    speed: 400,
  };
  packages: Package[];
  constructor(
    private bookService: BookService,
    private packagesService: PackagesService
  ) {}

  ngOnInit() {
    this.subs.push(
      this.bookService.bookEmitter.subscribe((bookArray: Book[]) => {
        this.books = bookArray;
      })
    );
    this.subs.push(
      this.packagesService.getAllPackages().subscribe((packages) => {
        this.packages = packages;
      })
    );
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
