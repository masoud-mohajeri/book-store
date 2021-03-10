import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/shared/package.model';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss'],
})
export class PackageCardComponent implements OnInit {
  @Input() package: Package;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  goToPackage() {
    this.router.navigate(['package', this.package.packageId], { relativeTo: this.route });
  }
}
