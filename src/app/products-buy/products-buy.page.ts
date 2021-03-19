import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
    slidesPerView: Math.round(window.innerWidth / 275),
    speed: 400,
  };
  packages: Package[];
  packagesObs: Observable<Package[]>;
  booksObs: Observable<Book[]>;

  paginationP = 1;
  constructor(
    private bookService: BookService,
    private packagesService: PackagesService
  ) {}

  ngOnInit() {
    this.subs.push(
      this.bookService.getAllBooks().subscribe((bookArray: Book[]) => {
        this.books = bookArray;
      })
    );
    this.subs.push(
      this.packagesService.getAllPackages().subscribe((packages) => {
        this.packages = packages;
      })
    );
    this.packagesObs =  new Observable<Package[]>((Packageo) => {
      this.packagesService.getAllPackages().subscribe((packages) => {
        Packageo.next(packages);
        
      });
    });
    // console.log(this.packages);
  }
  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
