import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'شازده کوچولو',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'کودکان',
      author: 'آنتوان دو سنت اگزوپری  ',
      translator: 'ابوالحسن نجفی',
      publisher: 'ماندگار',
      pubYear: 2012,
      gist:
        'عده‌ای از منتقدین بر این باور هستند که کتاب شازده کوچولو الهام گرفته شده از یکی از داستان‌های هانس کریستین اندرسون به نام پری دریایی کوچولو است. هانس کریستین اندرسون یکی از مشهورترین نویسندگان ادبیات کودک داستانی با این عنوان دارد. این باور از جایی می‌آید که هنگامی که اگزوپری به دلیل جراحت‌های بعد از سقوط در بیمارستان بستری بود، دوستش آنابلا برای او داستان پری دریایی کوچک را می‌خواند. منتقدین می‌گویند شاید بعد از شنیدن این قصه بوده است که اگزوپری تصمیم به نوشتن شازده کوچولو کرده است.',
      imageUrl: '../../../assets/books/little-prince.jpg',
    },
    {
      id: 2,
      name: 'Alice in wonderland',
      price: 220000,
      inventory: 400,
      isbn: '978-3-16-148410-0',
      genere: 'novel',
      author: 'das rse',
      translator: 'ga dar',
      publisher: 'ddb lish',
      pubYear: 1925,
      gist:
        'lfds dsfksd jklsds asd fdf sd  l k skld lkdsfjk ls fksl klsd lk sdjl lsdkflk',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
    },
    {
      id: 3,
      name: 'Atomic habits',
      price: 150000,
      inventory: 200,
      isbn: '978-3-16-148410-0',
      genere: 'sci-fi',
      author: 'mas re',
      translator: 'ja far',
      publisher: 'pub lish',
      pubYear: 2012,
      gist: 'lfds dsfksdjklsdfskl k skld lkdsfjklsjfksl klsd lk sdjl lsdkflk',
      imageUrl: '../../../assets/books/atmic-habits.jpg',
    },
  ];
  bookEmitter = new BehaviorSubject<Book[]>(this.books);

  constructor() {}

  getAllBooks() {
    return this.books.slice();
  }

  getBookById(i: number) {
    this.books.find((book) => book.id === i);
    this.bookEmitter.next(this.books);
  }

  saveChanges(book: Book, id: number) {
    this.books[id] = book;
  }

  addBook(book: Book) {
    this.books.push(book);
    this.bookEmitter.next(this.books);
  }
}
