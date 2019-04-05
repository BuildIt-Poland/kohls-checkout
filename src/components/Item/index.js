import { connect } from 'react-redux';

import Item from './Item';

import { removeItem, increaseQuantity, decreaseQuantity, updateQuantity } from '../../actions/cartActions';

function mapDispatchToProps(dispatch, { itemId }) {
  return {
    handleRemoveItem: () => dispatch(removeItem(itemId)),
    handleSetItemQuantity: quantity => dispatch(updateQuantity(itemId, quantity)),
    handleIncreaseItemQuantity: () => dispatch(increaseQuantity(itemId)),
    handleDecreaseItemQuantity: () => dispatch(decreaseQuantity(itemId))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Item);
