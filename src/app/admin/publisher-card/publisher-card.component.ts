import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/services/books.service';
import { PublishersService } from 'src/app/shared/services/publishers.service';
import { UIService } from 'src/app/shared/services/ui.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-publisher-card',
  templateUrl: './publisher-card.component.html',
  styleUrls: ['./publisher-card.component.scss'],
})
export class PublisherCardComponent implements OnInit {
  @Input() publisher: User;
  books: Book[];
  expanded = false;
  paginationP = 1;

  constructor(
    private bookService: BookService,
    private uiService: UIService,
    private publisherService: PublishersService
  ) {}

  ngOnInit() {
    this.uiService.needSpinner.next(true);
    this.bookService.getAllBooksForPub().subscribe(
      (someBook) => {
        this.uiService.needSpinner.next(false);
        this.books = someBook;
      },
      (error) => {
        this.uiService.needSpinner.next(false);
        this.uiService.presentToast('مشکلی در دریافت لیست کتاب ها وجود دارد .');
        throw new Error(error);
      }
    );
  }
  changePublisherStatus() {
    this.publisherService.changePublisherStatus(
      !this.publisher.activatedStatus,
      this.publisher.id
    );
  }
  expandCollaps() {
    this.expanded = !this.expanded;
  }
}
