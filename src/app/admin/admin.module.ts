import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { PublisherCardComponent } from './publisher-card/publisher-card.component';
import { OffersComponent } from './offers/offers.component';
import { OfferItemComponent } from './offers/offer-item/offer-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminPage,
    PublisherCardComponent,
    OffersComponent,
    OfferItemComponent,
  ],
})
export class AdminPageModule {}
