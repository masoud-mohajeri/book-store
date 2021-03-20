import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/book.model';
import { ShCardService } from 'src/app/shared/services/shcard.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scService: ShCardService
  ) {}

  ngOnInit() {}
  goToBook() {
    this.router.navigate(['/products-buy', 'book', this.book.id]);
  }
  addToCard() {
    this.scService.addToCard(this.book.id);
  }
}
