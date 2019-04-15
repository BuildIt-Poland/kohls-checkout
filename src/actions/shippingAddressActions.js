import { CHECKOUT_SET_SHIPPING_ADDRESS } from '../constants/actionTypes';

export function setShippingAddress(shippingAddress) {
  return {
    type: CHECKOUT_SET_SHIPPING_ADDRESS,
    shippingAddress
  };
}
