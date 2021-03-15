export interface Order {
  orderId: number;
  bookId: number;
  count: number;
  customerAssredd?: string;
  publisherId: number;
  status: 'CARD' | 'PAIED' | 'SENT';
  postId?: number;
  paymentDate?: number;
}
