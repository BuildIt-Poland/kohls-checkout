import { connect } from 'react-redux';

import { increaseItemQuantity, decreaseItemQuantity, removeItem } from '../../actions/cartActions';
import CartItemControls from './CartItemControls';

function mapDispatchToprops(dispatch) {
  return {
    increaseQuantity: itemId => dispatch(increaseItemQuantity(itemId)),
    decreaseQuantity: itemId => dispatch(decreaseItemQuantity(itemId)),
    removeItem: itemId => dispatch(removeItem(itemId))
  };
}

export default connect(
  null,
  mapDispatchToprops
)(CartItemControls);
