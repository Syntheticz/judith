export interface productsTypes {
  _id: string;
  slug: string;
  title: string;
  price: number;
  "image-url": string;
}
export interface productType {
  _id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  "image-url": string;
}

export interface CartItem {
  _id: string;
  title: string;
  quantity: number;
  price: number;
}
