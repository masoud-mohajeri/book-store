export interface Order {
  orderId: number;
  bookId: number;
  count: number;
  customerId: number;
  publisherId: number;
  status: 'CARD' | 'PAIED' | 'SENT';
  postId?: number;
  paymentDate?: number;
}
