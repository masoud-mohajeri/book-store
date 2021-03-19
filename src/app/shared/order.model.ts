export interface Order {
  orderId?: string;
  bookId: string;
  count: number;
  customerAssredd?: string;
  publisher: string;
  status: 'CARD' | 'PAIED' | 'SENT';
  postId?: number;
  paymentDate?: number;
  customeName?: string;
  id?: string;
}
