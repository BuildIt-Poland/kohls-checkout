import {
  CART_SET_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_DECREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM
} from '../constants/actionTypes';

export function setItemQuantity(itemId, quantity) {
  return {
    type: CART_SET_ITEM_QUANTITY,
    itemId,
    quantity
  };
}
export function increaseItemQuantity(itemId) {
  return {
    type: CART_INCREASE_ITEM_QUANTITY,
    itemId
  };
}
export function decreaseItemQuantity(itemId) {
  return {
    type: CART_DECREASE_ITEM_QUANTITY,
    itemId
  };
}

export function removeItem(itemId) {
  return {
    type: CART_REMOVE_ITEM,
    itemId
  };
}
