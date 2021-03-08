import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCardAndPurchasePage } from './shopping-card-and-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCardAndPurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCardAndPurchasePageRoutingModule {}
