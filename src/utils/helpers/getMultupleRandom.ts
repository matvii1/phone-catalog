import { Product } from 'types/Product';

export function getMultupleRandom(arr: Product[], num: number) {
  const shuffledArr = [...arr].sort(() => 0.5 - Math.random());

  return shuffledArr.slice(0, num);
}
