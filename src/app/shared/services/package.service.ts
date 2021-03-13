import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Package } from '../package.model';
import { BookService } from './books.service';

@Injectable({ providedIn: 'root' })
export class PackagesService {
  packages: Package[] = [
    {
      packageId: 1,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 4, 3, 5, 6, 7, 8, 9],
    },
    {
      packageId: 2,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 5, 7, 3],
    },
    {
      packageId: 3,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 5, 7, 8, 3],
    },
    {
      packageId: 4,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 3],
    },
    {
      packageId: 5,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 3],
    },
    {
      packageId: 6,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 3],
    },
    {
      packageId: 7,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 3],
    },
    {
      packageId: 8,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 3],
    },
    {
      packageId: 9,
      name: 'خاطرات کودکی ',
      imageUrl: '../../../assets/books/alice-in-wondeland.png',
      bookIdArray: [1, 2, 3],
    },
  ];
  packageEmitter = new BehaviorSubject<Package[]>(null);
  constructor(private bookService: BookService) {}

  getAllPackages() {
    this.packageEmitter.next(this.packages);
    return this.packageEmitter;
  }

  returnPackageById(id: number) {
    return this.packages.find((pack) => pack.packageId === id);
  }

  updatePackage(thePackage: Package): void {
    const theId = this.packages.findIndex(
      (pack) => pack.packageId === thePackage.packageId
    );
    this.packages[theId] = thePackage;
    this.packageEmitter.next(this.packages);
  }

  addPackage(thePackage: Package): void {
    this.packages.push(thePackage);
    this.packageEmitter.next(this.packages);
  }

  deletePackage(id: number): void {
    const theId = this.packages.findIndex((pack) => pack.packageId === id);
    this.packages.splice(theId, 1);
    this.packageEmitter.next(this.packages);
    console.log('delete!');
  }
}
