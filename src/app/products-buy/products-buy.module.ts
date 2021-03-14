import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { IonicModule } from '@ionic/angular';

import { ProductsBuyPageRoutingModule } from './products-buy-routing.module';
import { ProductsBuyPage } from './products-buy.page';
import { BookCardComponent } from './book-card/book-card.component';
import { BookPageComponent } from './book-page/book-page.component';
import { PackageCardComponent } from './package-card/package-card.component';
import { PackagePageComponent } from './package-page/package-page.component';

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
    BookPageComponent,
    PackageCardComponent,
    PackagePageComponent,
  ],
})
export class ProductsBuyPageModule {}
