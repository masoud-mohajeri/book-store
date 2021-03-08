import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsBuyPageRoutingModule } from './products-buy-routing.module';

import { ProductsBuyPage } from './products-buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsBuyPageRoutingModule
  ],
  declarations: [ProductsBuyPage]
})
export class ProductsBuyPageModule {}
