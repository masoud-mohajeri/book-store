import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../shared/order.model';
import { OrderPaymentService } from '../shared/services/orderPayment.service';
import { PublishersService } from '../shared/services/publishers.service';
import { UIService } from '../shared/services/ui.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit, OnDestroy {
  pageState = 'offers';
  subscriptions: Subscription[] = [];
  publishers: User[];
  orders: Order[];
  constructor(
    private publishersService: PublishersService,
    private orderPayService: OrderPaymentService,
    private uiService: UIService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.publishersService.getAllPublishers().subscribe(
        (pubs) => {
          this.publishers = pubs;
        },
        (error) => {
          this.uiService.presentToast('مشکلی در دریافت لیست ناشران وجود دارد ');
          throw new Error(error);
        }
      )
    );

    this.orderPayService.getAllOrders().subscribe((allOrders) => {
      this.orders = allOrders;
    });
  }

  segmentChanged(event: any) {
    this.pageState = event.detail.value;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
