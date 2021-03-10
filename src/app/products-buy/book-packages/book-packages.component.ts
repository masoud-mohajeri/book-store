import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-packages',
  templateUrl: './book-packages.component.html',
  styleUrls: ['./book-packages.component.scss'],
})
export class BookPackagesComponent implements OnInit {
  packageId: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.packageId = +this.route.snapshot.params['pid'];
    console.log(this.packageId);
  }
}
