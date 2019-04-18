import { combineReducers } from 'redux';

import cart from './cartReducer';
import shippingAddress from './shippingAddressReducer';
import paymentInfo from './paymentInfoReducer';

const rootReducer = combineReducers({
  cart,
  shippingAddress,
  paymentInfo
});

export default rootReducer;
