import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/services/books.service';
import { PackagesService } from 'src/app/shared/services/package.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.scss'],
})
export class PackagePageComponent implements OnInit, OnDestroy {
  booksInPack: Book[] = [];
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private packagesService: PackagesService
  ) {}

  ngOnInit() {
    let packageId = +this.route.snapshot.params['pid'];
    let thePackage = this.packagesService.returnPackageById(packageId);
    for (let bId of thePackage.bookIdArray) {
      this.booksInPack.push(this.bookService.returnBookById(bId));
    }
    console.log(this.booksInPack);
  }

  ngOnDestroy() {
    this.booksInPack = [];
  }
}
