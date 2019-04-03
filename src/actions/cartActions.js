import { SET_QUANTITY, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/actionTypes';

export function updateQuantity(cartItemId, quantity) {
  return {
    type: SET_QUANTITY,
    cartItemId,
    quantity
  };
}
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

export function removeItem(cartItemId) {
  return {
    type: REMOVE_ITEM,
    cartItemId
  };
}
