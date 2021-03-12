import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookPackagesComponent } from 'src/app/products-buy/book-packages/book-packages.component';
import { Book } from 'src/app/shared/book.model';
import { Package } from 'src/app/shared/package.model';
import { BookService } from 'src/app/shared/services/books.service';
import { PackagesService } from 'src/app/shared/services/package.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit, OnDestroy {
  packages: Package[];
  subs: Subscription[] = [];
  paginationP = 1;
  packageForm: FormGroup;
  allBooks: Book[];
  editMode = false;
  onEditPackage: Package = null;
  nextPackageId: number;
  constructor(
    private packagesService: PackagesService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.allBooks = this.bookService.getAllBooks();
    this.subs.push(
      this.packagesService.getAllPackages().subscribe((packages) => {
        this.packages = packages;
      })
    );

    this.nextPackageId = this.packages.length + 1;

    this.packageForm = new FormGroup({
      packageId: new FormControl(this.nextPackageId),
      name: new FormControl(this.onEditPackage?.name),
      imageurl: new FormControl(this.onEditPackage?.imageUrl),
      books: new FormControl(this.onEditPackage?.bookIdArray),
    });
  }
  onClick() {
    console.log(this.packageForm.value);
    console.log('this.editMode', this.editMode);
    console.log('this.onEditPackage', this.onEditPackage);
  }

  editPack(pid: number) {
    this.editMode = true;
    this.onEditPackage = this.packagesService.returnPackageById(pid);
    this.nextPackageId = this.onEditPackage.packageId;
    console.log('this.onEditPackage', this.onEditPackage);
    console.log('this.nextPackageId', this.nextPackageId);
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
