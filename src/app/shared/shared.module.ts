import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerTabComponent } from './customer-tab/customer-tab.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomerTabComponent],
  imports: [CommonModule, IonicModule,RouterModule],
  exports: [CustomerTabComponent],
})
export class SharedModule {}
