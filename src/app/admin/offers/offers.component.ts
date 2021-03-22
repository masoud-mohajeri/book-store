import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/shared/book.model';
import { Package } from 'src/app/shared/package.model';
import { BookService } from 'src/app/shared/services/books.service';
import { PackagesService } from 'src/app/shared/services/package.service';
import { UIService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit, OnDestroy {
  // packages: Package[];
  packages: Observable<Package[]>;
  subs: Subscription[] = [];
  paginationP = 1;
  packageForm: FormGroup;
  books: Book[];
  editMode = false;
  onEditPackage: Package = null;
  nextPackageId: number;
  imageEvent;
  constructor(
    private packagesService: PackagesService,
    private bookService: BookService,
    private uiService: UIService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      (someBook) => {
        this.books = someBook;
      },
      (error) => {
        this.uiService.presentToast('مشکلی در دریافت لیست کتاب ها وجود دارد .');
        throw new Error(error);
      }
    );
    this.packages = new Observable<Package[]>((data) => {
      this.packagesService.getAllPackages().subscribe((packages) => {
        data.next(packages);
      });
    });

    this.packageForm = new FormGroup({
      id: new FormControl(null, Validators.required),
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

  editPack(pid: string) {
    this.loadingController
      .create({ message: 'لطفا کمی صبر کنید' })
      .then((wel) => {
        wel.present();

        this.editMode = true;
        this.packagesService
          .returnPackageById(pid)
          .then((p: Package) => {
            this.onEditPackage = p;
            // console.log(this.onEditPackage);
            this.packageForm.setValue({
              id: this.onEditPackage.id,
              name: this.onEditPackage.name,
              imageUrl: this.onEditPackage.imageUrl,
              bookIdArray: this.onEditPackage.bookIdArray,
              description: this.onEditPackage.description,
            });
            wel.dismiss();
          })
          .catch((err) => {
            wel.dismiss();
            // console.log('err');
            throw new Error(err);
          });
      });
  }

  onClearButton() {
    this.packageForm.reset();
    this.editMode = false;
    this.onEditPackage = null;
  }

  onDeleteButton() {
    this.packagesService.deletePackage(this.onEditPackage.id);
    this.onClearButton();
  }

  onAddButton() {
    this.loadingController
      .create({ message: 'لطفا کمی صبر کنید' })
      .then((wel) => {
        wel.present();

        this.packagesService
          .uploadImage(this.imageEvent, this.packageForm.value.name)
          .then((url) => {
            this.packageForm.patchValue({ imageUrl: url });
            this.packagesService.addPackage(this.packageForm.value);
            this.uiService.presentToast('عکس با موفقیت اپلود شد ');
            this.onClearButton();
            wel.dismiss();
          })
          .catch((err) => {
            this.uiService.presentToast('عکس با موفقیت اپلود نشد ');
            wel.dismiss();
            throw new Error(err);
          });
      });
  }

  uploadFile(event) {
    this.imageEvent = event;
  }

  onUpdateButton() {
    this.packagesService.updatePackage(this.packageForm.value);
    this.onClearButton();
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
