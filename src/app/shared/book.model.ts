export interface Book {
  id: number;
  name: string;
  price: number;
  inventory: number;
  isbn: string;
  genere: string;
  author: string;
  translator?: string;
  publisher: string;
  pubYear: number;
  gist: string;
  imageUrl: string;
}
