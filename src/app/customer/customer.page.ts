import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Order } from '../shared/order.model';
import { AuthService } from '../shared/services/auth.service';
import { OrderPaymentService } from '../shared/services/orderPayment.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  addressForm: FormGroup;
  orders: Order[] = [];
  needSpinner = true;
  User: User = null;
  constructor(
    private orderPaymentService: OrderPaymentService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.userInfo.subscribe((u) => {
      this.User = u;
    });
    this.addressForm = new FormGroup({
      address: new FormControl(this.User?.address, Validators.required),
    });
  }
  ionViewWillEnter() {
    new Promise((resolve, reject) => {
      this.orderPaymentService.getPaiedOrdersUser().subscribe((ol) => {
        resolve(ol);
      });
    }).then((ol: Order[]) => {
      this.orders = ol;
      console.log(ol);
      this.needSpinner = false;
    });
  }
  saveNewAddress() {
    this.authService.saveAddress(this.addressForm.value);
  }
}
