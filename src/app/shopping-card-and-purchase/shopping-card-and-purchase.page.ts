import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { OrderPaymentService } from '../shared/services/orderPayment.service';

@Component({
  selector: 'app-shopping-card-and-purchase',
  templateUrl: './shopping-card-and-purchase.page.html',
  styleUrls: ['./shopping-card-and-purchase.page.scss'],
})
export class ShoppingCardAndPurchasePage implements OnInit {
  orders: Order[];
  constructor(private orderPayService: OrderPaymentService) {}

  ngOnInit() {
    this.orderPayService.orderEmitter.subscribe((orders) => {
      this.orders = orders;
    });
  }
}
