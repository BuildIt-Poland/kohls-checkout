import { CHECKOUT_SET_PAYMENT_INFO } from '../constants/actionTypes';

const initialState = {
  cardNumber: '',
  expMonth: 'MM',
  expYear: 'YY',
  securityCode: ''
};

function paymentInfoReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_SET_PAYMENT_INFO:
      return {
        ...state,
        ...action.paymentInfo
      };
    default:
      return state;
  }
}

export default paymentInfoReducer;
