import { INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/actionTypes';

export function increaseQuantity(cartItemId) {
  return {
    type: INCREASE_QUANTITY,
    cartItemId
  };
}

export function decreaseQuantity(cartItemId) {
  return {
    type: DECREASE_QUANTITY,
    cartItemId
  };
}
