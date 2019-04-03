import { UPDATE_QUANTITY, REMOVE_ITEM } from '../constants/actionTypes';

export function updateQuantity(cartItemId, quantity) {
  return {
    type: UPDATE_QUANTITY,
    cartItemId,
    quantity
  };
}

export function removeItem(cartItemId) {
  return {
    type: REMOVE_ITEM,
    cartItemId
  };
}
