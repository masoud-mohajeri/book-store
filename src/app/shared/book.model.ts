export interface Book {
  id: string;
  name: string;
  price: number;
  inventory: number;
  isbn: string;
  genere: string;
  author: string;
  translator?: string;
  publisher: string;
  publisherId: string;
  pubYear: number;
  gist: string;
  imageUrl: string;
}
