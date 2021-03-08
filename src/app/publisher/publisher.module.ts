import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublisherPageRoutingModule } from './publisher-routing.module';

import { PublisherPage } from './publisher.page';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublisherPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PublisherPage, EditBookComponent, AddBookComponent],
})
export class PublisherPageModule {}
