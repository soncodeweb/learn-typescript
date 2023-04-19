export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ICart {
  title: string;
  desc?: string;
  image: string;
  link: string;
}

export interface ProductNewFeature extends Product {
  speed?: string;
}
// union
// assertions: & -> merge 2 interface lại với nhau
export type FinalProduct = Product & ProductNewFeature;
