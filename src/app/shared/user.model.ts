export interface User {
  id: number;
  name: string;
  status: 'ADMIN' | 'PUBLISHER' | 'CUSTOMER';
  address?: string;
  activatedStatus: boolean;
  imageUrl?: string;
}
