import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },
  {
    path: 'publisher',
    loadChildren: () =>
      import('./publisher/publisher.module').then((m) => m.PublisherPageModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerPageModule),
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
  {
    path: 'customer',
    loadChildren: () => import('./user-area/user-area.module').then( m => m.UserAreaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
