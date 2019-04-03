import { UPDATE_QUANTITY } from '../constants/actionTypes';

export function updateQuantity(cartItemId, quantity) {
  return {
    type: UPDATE_QUANTITY,
    cartItemId,
    quantity
  };
}
