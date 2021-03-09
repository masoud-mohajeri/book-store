import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsBuyPageRoutingModule } from './products-buy-routing.module';

import { ProductsBuyPage } from './products-buy.page';
import { BookCardComponent } from './book-card/book-card.component';
import { BookPackagesComponent } from './book-packages/book-packages.component';
import { BookPageComponent } from './book-page/book-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsBuyPageRoutingModule,
  ],
  declarations: [
    ProductsBuyPage,
    BookCardComponent,
    BookPackagesComponent,
    BookPageComponent,
  ],
})
export class ProductsBuyPageModule {}
