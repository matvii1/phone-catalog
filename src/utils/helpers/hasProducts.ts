import { Product } from 'types/Product';

export function hasProducts(products: Product[], type: string) {
  return products.filter(x => x.category === type).length > 0;
}
