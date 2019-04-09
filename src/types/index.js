// Centralised type definitions for commonly used ones

import { shape, number, string } from 'prop-types';

export const itemVariants = shape({
  size: string,
  color: string
});

export const itemPrice = shape({
  regular: number.isRequired,
  discount: number
});

export const item = shape({
  id: string.isRequired,
  name: string.isRequired,
  imgUrl: string.isRequired,
  variants: itemVariants.isRequired,
  price: itemPrice.isRequired,
  quantity: number.isRequired
});
