import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';

import { ProductsBuyPage } from './products-buy.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsBuyPage,
  },
  {
    path: ':id',
    component: BookPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsBuyPageRoutingModule {}
