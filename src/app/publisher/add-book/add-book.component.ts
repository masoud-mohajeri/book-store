import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BookService } from 'src/app/shared/services/books.service';
import { UIService } from 'src/app/shared/services/ui.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  Publisher: User;
  imageUrl: string;
  fileInputEvent;
  constructor(
    private bookService: BookService,
    private authService: AuthService,
    private uiService: UIService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.authService.userInfo.subscribe((user) => {
      this.Publisher = user;
    });
    this.bookForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      inventory: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      translator: new FormControl(null),
      publisher: new FormControl(this.Publisher.name, Validators.required),
      pubYear: new FormControl(null, Validators.required),
      gist: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
    });
  }
  onClear() {
    this.bookForm.reset();
    this.bookForm.patchValue({ publisher: this.Publisher.name });
  }
  onSave() {
    console.log(this.bookForm.value);
    this.loadingController
      .create({ message: 'لطفا کمی صبر کنید ' })
      .then((loadingEl) => {
        loadingEl.present();

        new Promise((resolve, reject) => {
          this.bookService
            .uploadImage(
              this.fileInputEvent,
              this.Publisher.name,
              this.bookForm.value.name
            )
            .then((url: string) => {
              this.imageUrl = url;
              resolve(url);
            });
        })
          .then((url) => {
            this.bookForm.patchValue({ imageUrl: url });
            this.bookService
              .addBook(this.bookForm.value)
              .then((message: string) => {
                // this.onClear();
                loadingEl.dismiss();
                this.uiService.presentToast(message);
              })
              .catch((message: string) => {
                loadingEl.dismiss();
                this.uiService.presentToast(message);
              });
          })
          .catch(() => {
            this.uiService.presentToast('مشکلی در آپلود عکس وجود دارد');
          });
      });

    // this.onClear();
  }

  uploadFile(event) {
    this.fileInputEvent = event;
  }
}
