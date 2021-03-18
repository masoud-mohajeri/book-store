export interface Order {
  orderId: string;
  bookId: string;
  count: number;
  customerAssredd?: string;
  publisherId: string;
  status: 'CARD' | 'PAIED' | 'SENT';
  postId?: number;
  paymentDate?: number;
}
