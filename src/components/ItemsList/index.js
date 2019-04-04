import { connect } from 'react-redux';

import ItemsList from './ItemsList';
import { removeItem, increaseQuantity, decreaseQuantity, updateQuantity } from '../../actions/cartActions';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleRemoveItem: cartItemId => dispatch(removeItem(cartItemId)),
    handleUpdateItemQuantity: (cartItemId, quantity) => dispatch(updateQuantity(cartItemId, quantity)),
    handleIncreaseItemQuantity: cartItemId => dispatch(increaseQuantity(cartItemId)),
    handleDecreaseItemQuantity: cartItemId => dispatch(decreaseQuantity(cartItemId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
