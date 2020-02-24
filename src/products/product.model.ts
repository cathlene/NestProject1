export interface Product {
  id: string;
  title: string;
  description: string;
  color: ProductColor;
}

export enum ProductColor {
  PINK = 'PINK',
  BLACK = 'BLACK',
}
