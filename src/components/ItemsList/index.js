import { connect } from 'react-redux';

import ItemsList from './ItemsList';
import { updateQuantity } from '../../actions/quantityActions';

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdate: (cartItemId, quantity) => dispatch(updateQuantity(cartItemId, quantity))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsList);
