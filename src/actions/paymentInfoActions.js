import { CHECKOUT_SET_PAYMENT_INFO } from '../constants/actionTypes';

export function setPaymentInfo(paymentInfo) {
  return {
    type: CHECKOUT_SET_PAYMENT_INFO,
    paymentInfo
  };
}
