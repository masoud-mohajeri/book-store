export interface User {
  id?: string;
  name: string;
  status: 'ADMIN' | 'PUBLISHER' | 'CUSTOMER';
  address?: string;
  activatedStatus?: boolean;
  imageUrl?: string;
  email?: string;
}
