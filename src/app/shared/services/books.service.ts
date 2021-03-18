import { Injectable } from '@angular/core';
// import { AngularFireStorage } from '@angular/fire/storage';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book.model';
import { User } from '../user.model';
import { AuthService } from './auth.service';
import { UIService } from './ui.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  // books: Book[] = [];
  // bookEmitter = new BehaviorSubject<Book[]>(this.books);
  booksCollection: AngularFirestoreCollection<Book>;
  Publisher: User = null;
  constructor(
    private afStorage: AngularFireStorage,
    private afs: AngularFirestore,
    private authService: AuthService,
    private uiService: UIService
  ) {
    this.booksCollection = afs.collection<Book>('Book');
    authService.userInfo.subscribe((user) => {
      this.Publisher = user;
    });
  }

  getAllBooks() {
    return this.booksCollection.valueChanges({ idField: 'id' });
  }

  getAllBooksForPub() {
    return this.afs
      .collection<Book>('Book', (ref) =>
        ref.where('publisher', '==', this.Publisher.name)
      )
      .valueChanges({ idField: 'id' });
  }



  returnBookById(id: string) {
    return this.afs.doc<Book>('Book/' + id).valueChanges({ idFeild: 'id' });
  }

  saveChanges(book: Book, id: string) {
    this.afs
      .doc<Book>('Book/' + id)
      .update(book)
      .then(() => {
        this.uiService.presentToast('کتاب با موفقیت اصلاح شد ');
      })
      .catch(() => {
        this.uiService.presentToast(
          'اصلاح کتاب ممکن نیست ، لطفا بعدا امتحان کنید '
        );
      });
    // this.books[id] = book;
  }
  // deleteBook(id){

  // }

  addBook(book: Book) {
    // this.books.push(book);
    // this.bookEmitter.next(this.books);

    return new Promise((resolve, reject) => {
      this.booksCollection
        .add(book)
        .then(() => {
          resolve(' کتاب با موفقیت در سایت ثبت شد ');
        })
        .catch(() => {
          reject(' مشکلی در ثبت کتاب وجود دارد ');
        });
    });
  }

  async uploadImage(event: any, publisher: string, book: string) {
    const file = event.target.files[0];
    const filePath = publisher + '/' + book;
    const ref = this.afStorage.ref(filePath);
    const task = await ref.put(file);
    console.log('upload finished ');
    const ref2 = this.afStorage.ref(filePath);
    const promise = new Promise((resolve, reject) => {
      ref2.getDownloadURL().subscribe((url: string) => {
        console.log(url);
        resolve(url);
      });
    });
    return promise;
    // console.log('await 2 ');
  }

  decreassInvestory(bookId: string, count: number) {
    new Promise((resolve, reject) => {
      this.afs
        .doc<Book>('Book/' + bookId)
        .get()
        .subscribe((book) => {
          resolve(book);
        });
    }).then((book: Book) => {
      this.afs
        .doc<Book>('Book/' + bookId)
        .update({ inventory: book.inventory - count })
        .then((res) => {
          console.log('book investory decreased successfully');
        });
    });
    // const theId = this.books.findIndex((book) => book.id === bookId);
    // this.books[theId].inventory = this.books[theId].inventory - count;
    // this.bookEmitter.next(this.books);
  }
}
