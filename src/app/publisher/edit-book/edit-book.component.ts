import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/services/books.service';

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
  constructor(private bookService: BookService) {}

  ngOnInit() {
    // if (this.bookIdToEdit) {
    this.bookObj = this.book;
    // }
    this.bookForm = new FormGroup({
      name: new FormControl(this.bookObj?.name),
      price: new FormControl(this.bookObj?.price),
      inventory: new FormControl(this.bookObj?.inventory),
      isbn: new FormControl(this.bookObj?.isbn),
      translator: new FormControl(this.bookObj?.translator),
      publisher: new FormControl(this.bookObj?.publisher),
      pubYear: new FormControl(this.bookObj?.pubYear),
      gist: new FormControl(this.bookObj?.gist),
      imageUrl: new FormControl(this.bookObj?.imageUrl),
    });
  }
  expandCollaps() {
    this.editMode = !this.editMode;
  }
  onSave() {
    if (this.bookForm.value !== this.bookObj) {
      this.bookService.saveChanges(this.bookForm.value, this.book.id);
      this.expandCollaps();
    }
  }
  onDeleteBook() {
    this.bookService.deleteBook(this.book.id);
  }
}
