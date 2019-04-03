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
    handleRemove: cartItemId => dispatch(removeItem(cartItemId)),
    handleUpdate: (cartItemId, quantity) => dispatch(updateQuantity(cartItemId, quantity)),
    handleIncrease: cartItemId => dispatch(increaseQuantity(cartItemId)),
    handleDecrease: cartItemId => dispatch(decreaseQuantity(cartItemId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
