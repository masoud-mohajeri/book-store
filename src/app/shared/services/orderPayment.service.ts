import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../order.model';

@Injectable({ providedIn: 'root' })
export class OrderPaymentService {
  orders: Order[] = [
    {
      bookId: 1,
      count: 1,
      customerId: 1,
      orderId: 1,
      publisherId: 1,
      status: 'CARD',
    },
    {
      bookId: 1,
      count: 1,
      customerId: 2,
      orderId: 2,
      publisherId: 1,
      status: 'PAIED',
      paymentDate: Date.now(),
    },
    {
      bookId: 1,
      count: 1,
      customerId: 1,
      orderId: 3,
      publisherId: 1,
      status: 'SENT',
      paymentDate: Date.now(),
      postId: 784564345,
    },
  ];
  orderEmitter = new BehaviorSubject<Order[]>(this.orders);
  constructor() {}

  addOrder(order: Order) {
    this.orders.push(order);
    this.orderEmitter.next(this.orders);
  }
  payOrder(orderId: number) {
    const theId = this.orders.findIndex((ord) => ord.orderId === orderId);
    this.orders[theId].status = 'PAIED';
    this.orderEmitter.next(this.orders);
  }

  cancelOrder(orderId: number) {
    const theId = this.orders.findIndex((ord) => ord.orderId === orderId);
    this.orders.slice(theId, 1);
    this.orderEmitter.next(this.orders);
  }
}
