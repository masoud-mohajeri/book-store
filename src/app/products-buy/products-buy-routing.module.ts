import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsBuyPage } from './products-buy.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsBuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsBuyPageRoutingModule {}
