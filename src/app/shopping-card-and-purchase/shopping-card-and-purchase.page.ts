import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderPaymentService } from '../shared/services/orderPayment.service';
import { ShCardService } from '../shared/services/shcard.service';
import { UIService } from '../shared/services/ui.service';

@Component({
  selector: 'app-shopping-card-and-purchase',
  templateUrl: './shopping-card-and-purchase.page.html',
  styleUrls: ['./shopping-card-and-purchase.page.scss'],
})
export class ShoppingCardAndPurchasePage implements OnInit {
  orders: Order[] = [];
  // paymentStatus = true;
  needSpinner = true;
  constructor(
    private orderPayService: OrderPaymentService,
    private shCardService: ShCardService,
    private uiService: UIService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.orderPayService.getAllOrdersUser().then((oList: Order[]) => {
      this.orders = oList;
      this.needSpinner = false;
    });
  }

  // payAllItems() {
  //   for (let order of this.orders) {
  //     this.orderPayService.payOrder(order.orderId);
  //     this.shCardService.removeFromCard(order.bookId);
  //   }
  // }
}
