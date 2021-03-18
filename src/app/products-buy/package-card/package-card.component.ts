import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/shared/package.model';
import { ShCardService } from 'src/app/shared/services/shcard.service';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
})
export class PackageCardComponent implements OnInit {
  @Input() package: Package;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scService: ShCardService
  ) {}

  ngOnInit() {}
  goToPackage() {
    this.router.navigate(['package', this.package.id], {
      relativeTo: this.route,
    });
  }
  addToCard() {
    for (let bookId of this.package.bookIdArray) {
      this.scService.addToCard(bookId.toString());
    }
  }
}
