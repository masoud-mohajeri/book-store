import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/services/books.service';
import { UIService } from 'src/app/shared/services/ui.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  // bookIdToEdit: number ;
  @Input() book: Book;
  @Input() bookId: string;
  bookForm: FormGroup;
  bookObj: Book = null;
  editMode = false;
  imgEvent;
  constructor(
    private bookService: BookService,
    private loadingController: LoadingController,
    private uiService: UIService
  ) {}

  ngOnInit() {
    // if (this.bookIdToEdit) {
    this.bookObj = this.book;
    // }
    this.bookForm = new FormGroup({
      name: new FormControl(this.bookObj?.name, Validators.required),
      price: new FormControl(this.bookObj?.price, Validators.required),
      inventory: new FormControl(this.bookObj?.inventory, Validators.required),
      isbn: new FormControl(this.bookObj?.isbn, Validators.required),
      translator: new FormControl(this.bookObj?.translator),
      author: new FormControl(this.bookObj?.author, Validators.required),
      publisher: new FormControl(this.bookObj?.publisher, Validators.required),
      pubYear: new FormControl(this.bookObj?.pubYear, Validators.required),
      gist: new FormControl(this.bookObj?.gist, Validators.required),
      imageUrl: new FormControl(this.bookObj?.imageUrl, Validators.required),
    });
  }
  expandCollaps() {
    this.editMode = !this.editMode;
  }
  onSave() {
    this.loadingController
      .create({ message: 'لطفا کمی صبر کنید' })
      .then((wEl) => {
        wEl.present();
        if (this.bookForm.value !== this.bookObj) {
          if (this.bookForm.value.imageUrl !== this.bookObj.imageUrl) {
            this.bookService
              .uploadImage(
                this.imgEvent,
                Math.random().toString(),
                Math.random().toString()
              )
              .then((imgUlr) => {
                console.log(imgUlr);
                this.bookForm.patchValue({ imageUrl: imgUlr });
                this.bookService.saveChanges(this.bookForm.value, this.book.id);
                this.expandCollaps();
                wEl.dismiss();
                this.uiService.presentToast('کتاب با موفقیت اصلاح گردید');
              })
              .catch((err) => {
                wEl.dismiss();
                console.log(err)
                this.uiService.presentToast('اصلاح کتاب ممکن نیست ');
              });
          } else {
            this.bookService.saveChanges(this.bookForm.value, this.book.id);
            this.expandCollaps();
            wEl.dismiss();
            this.uiService.presentToast('کتاب با موفقیت اصلاح گردید');
          }
        }
      });
  }
  onDeleteBook() {
    this.bookService.deleteBook(this.book.id);
  }
  handleFileInput(event) {
    this.imgEvent = event;
  }
}
