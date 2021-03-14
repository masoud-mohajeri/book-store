import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { Package } from 'src/app/shared/package.model';
import { BookService } from 'src/app/shared/services/books.service';
import { PackagesService } from 'src/app/shared/services/package.service';
import { ShCardService } from 'src/app/shared/services/shcard.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.scss'],
})
export class PackagePageComponent implements OnInit, OnDestroy {
  booksInPack: Book[] = [];
  thePackage: Package;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private packagesService: PackagesService,
    private scService: ShCardService
  ) {}

  ngOnInit() {
    let packageId = +this.route.snapshot.params['pid'];
    this.thePackage = this.packagesService.returnPackageById(packageId);
    for (let bId of this.thePackage.bookIdArray) {
      this.booksInPack.push(this.bookService.returnBookById(bId));
    }
  }
  addPackToCard() {
    for (let bookId of this.thePackage.bookIdArray) {
      this.scService.addToCard(bookId);
    }
  }
  ngOnDestroy() {
    this.booksInPack = [];
  }
}
