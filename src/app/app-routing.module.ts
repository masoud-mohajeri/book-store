import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './shared/guards/admin.guard';
import { PublisherGuard } from './shared/guards/publisher.guard';
import { CustomerGuard } from './shared/guards/customer.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
    canLoad: [AdminGuard],
  },
  {
    path: 'publisher',
    loadChildren: () =>
      import('./publisher/publisher.module').then((m) => m.PublisherPageModule),
    canLoad: [PublisherGuard],
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerPageModule),
    canLoad: [CustomerGuard],
  },
  {
    path: 'products-buy',
    loadChildren: () =>
      import('./products-buy/products-buy.module').then(
        (m) => m.ProductsBuyPageModule
      ),
  },
  {
    path: 'shopping-card',
    loadChildren: () =>
      import(
        './shopping-card-and-purchase/shopping-card-and-purchase.module'
      ).then((m) => m.ShoppingCardAndPurchasePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
