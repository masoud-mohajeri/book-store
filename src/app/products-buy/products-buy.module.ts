import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { ProductsBuyPageRoutingModule } from './products-buy-routing.module';
import { ProductsBuyPage } from './products-buy.page';
import { BookCardComponent } from './book-card/book-card.component';
import { BookPackagesComponent } from './book-packages/book-packages.component';
import { BookPageComponent } from './book-page/book-page.component';
import { PackageCardComponent } from './package-card/package-card.component';
import { PackagePageComponent } from './package-page/package-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsBuyPageRoutingModule,
    NgxPaginationModule,
    
  ],
  declarations: [
    ProductsBuyPage,
    BookCardComponent,
    BookPackagesComponent,
    BookPageComponent,
    PackageCardComponent,
    PackagePageComponent,
  ],
})
export class ProductsBuyPageModule {}
