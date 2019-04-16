import React from 'react';
import PropTypes from 'prop-types';

import QuantityInput from '../QuantityInput';
import Wrapper from './Wrapper';
import RemoveItem from './RemoveItem';

function CartItemControls({ id, quantity, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <Wrapper>
      <QuantityInput
        quantity={quantity}
        increaseQuantity={() => increaseQuantity(id)}
        decreaseQuantity={() => decreaseQuantity(id)}
      />
      <RemoveItem
        onClick={() => removeItem(id)}
        aria-label="remove product"
        data-testid="remove-product-button"
        as="button"
      >
        Remove
      </RemoveItem>
    </Wrapper>
  );
}

CartItemControls.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default CartItemControls;
