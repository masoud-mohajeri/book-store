import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  goToBook() {
    this.router.navigate([this.book.id], { relativeTo: this.route });
  }
}
