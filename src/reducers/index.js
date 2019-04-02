import { combineReducers } from 'redux';

import counter from './counterReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  counter,
  cart
});

export default rootReducer;
