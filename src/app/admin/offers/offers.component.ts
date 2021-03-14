import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
      packageId: new FormControl(this.nextPackageId, Validators.required),
      name: new FormControl(this.onEditPackage?.name, Validators.required),
      imageUrl: new FormControl(
        this.onEditPackage?.imageUrl,
        Validators.required
      ),
      bookIdArray: new FormControl(
        this.onEditPackage?.bookIdArray,
        Validators.required
      ),
      description: new FormControl(
        this.onEditPackage?.description,
        Validators.required
      ),
    });
  }

  editPack(pid: number) {
    this.editMode = true;
    this.onEditPackage = this.packagesService.returnPackageById(pid);
    this.packageForm.setValue({
      packageId: this.onEditPackage.packageId,
      name: this.onEditPackage.name,
      imageUrl: this.onEditPackage.imageUrl,
      bookIdArray: this.onEditPackage.bookIdArray,
      description:this.onEditPackage.description,
    });
  }

  onClearButton() {
    this.packageForm.reset();
    this.packageForm.patchValue({
      packageId: this.packages.length + 1,
    });
    this.editMode = false;
    this.onEditPackage = null;
  }

  onDeleteButton() {
    this.packagesService.deletePackage(this.onEditPackage.packageId);
    this.onClearButton();
  }

  onAddButton() {
    this.packagesService.addPackage(this.packageForm.value);
    this.onClearButton();
  }

  onUpdateButton() {
    this.packagesService.updatePackage(this.packageForm.value);
    this.onClearButton();
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
