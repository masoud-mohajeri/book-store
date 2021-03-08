import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCardAndPurchasePageRoutingModule } from './shopping-card-and-purchase-routing.module';

import { ShoppingCardAndPurchasePage } from './shopping-card-and-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCardAndPurchasePageRoutingModule
  ],
  declarations: [ShoppingCardAndPurchasePage]
})
export class ShoppingCardAndPurchasePageModule {}
