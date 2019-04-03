import { connect } from 'react-redux';

import ItemsList from './ItemsList';
import { updateQuantity, removeItem } from '../../actions/cartActions';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdate: (cartItemId, quantity) => dispatch(updateQuantity(cartItemId, quantity)),
    handleRemove: cartItemId => dispatch(removeItem(cartItemId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
