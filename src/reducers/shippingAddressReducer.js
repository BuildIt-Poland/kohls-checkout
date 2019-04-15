import { CHECKOUT_SET_SHIPPING_ADDRESS } from '../constants/actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  phone: ''
};

function shippingAddressReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_SET_SHIPPING_ADDRESS:
      return {
        ...state,
        ...action.shippingAddress
      };
    default:
      return state;
  }
}

export default shippingAddressReducer;
