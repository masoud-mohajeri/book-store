import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Order } from '../shared/order.model';
import { OrderPaymentService } from '../shared/services/orderPayment.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  addressForm: FormGroup;
  orders: Order[] = [];
  constructor(private orderPaymentService: OrderPaymentService) {}

  ngOnInit() {
    this.addressForm = new FormGroup({
      address: new FormControl(null),
    });
    this.orderPaymentService.orderEmitter.subscribe((theOrders) => {
      this.orders = theOrders;
    });
  }
  saveNewAddress() {
    console.log(this.addressForm.value);
  }
}
