import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      inventory: new FormControl(null, Validators.required),
      isbn: new FormControl(null, Validators.required),
      translator: new FormControl(null, Validators.required),
      publisher: new FormControl(null, Validators.required),
      pubYear: new FormControl(null, Validators.required),
      gist: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
    });
  }
  onClear() {
    this.bookForm.reset();
  }
  onSave() {
    this.bookService.addBook(this.bookForm.value);
    this.onClear();
  }
}
