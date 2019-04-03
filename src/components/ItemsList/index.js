import { connect } from 'react-redux';

import ItemsList from './ItemsList';
import { increaseQuantity, decreaseQuantity } from '../../actions/quantityActions';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClickUp: cartItemId => dispatch(increaseQuantity(cartItemId)),
    handleClickDown: cartItemId => dispatch(decreaseQuantity(cartItemId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
