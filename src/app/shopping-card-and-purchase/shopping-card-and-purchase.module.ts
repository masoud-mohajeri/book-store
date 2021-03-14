import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCardAndPurchasePageRoutingModule } from './shopping-card-and-purchase-routing.module';

import { ShoppingCardAndPurchasePage } from './shopping-card-and-purchase.page';
import { ItemCardComponent } from './item-card/item-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCardAndPurchasePageRoutingModule,
  ],
  declarations: [ShoppingCardAndPurchasePage, ItemCardComponent],
})
export class ShoppingCardAndPurchasePageModule {}
