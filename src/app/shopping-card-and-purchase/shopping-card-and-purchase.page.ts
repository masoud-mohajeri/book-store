import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderPaymentService } from '../shared/services/orderPayment.service';
import { ShCardService } from '../shared/services/shcard.service';

@Component({
  selector: 'app-shopping-card-and-purchase',
  templateUrl: './shopping-card-and-purchase.page.html',
  styleUrls: ['./shopping-card-and-purchase.page.scss'],
})
export class ShoppingCardAndPurchasePage implements OnInit {
  orders: Order[] = [];
  paymentStatus = true;
  constructor(
    private orderPayService: OrderPaymentService,
    private shCardService: ShCardService
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.orderPayService.getAllOrdersUser();
    this.orderPayService.orderEmitter.subscribe((orders) => {
      this.orders = orders;
    });
    console.log(this.orders);
    this.orderPayService.paymentOk.subscribe((ok) => (this.paymentStatus = ok));
  }

  // payAllItems() {
  //   for (let order of this.orders) {
  //     this.orderPayService.payOrder(order.orderId);
  //     this.shCardService.removeFromCard(order.bookId);
  //   }
  // }
}
