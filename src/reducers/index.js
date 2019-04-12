import { combineReducers } from 'redux';

import cart from './cartReducer';
import shippingAddress from './shippingAddressReducer';

const rootReducer = combineReducers({
  cart,
  shippingAddress
});

export default rootReducer;
