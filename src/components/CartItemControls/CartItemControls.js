import React from 'react';

import QuantityInput from '../QuantityInput';
import Wrapper from './Wrapper';
import RemoveItem from './RemoveItem';

function CartItemControls({ id, quantity, increaseQuantity, decreaseQuantity, remove }) {
  return (
    <Wrapper>
      <QuantityInput
        quantity={quantity}
        increaseQuantity={() => increaseQuantity(id)}
        decreaseQuantity={() => decreaseQuantity(id)}
      />
      <RemoveItem
        onClick={() => remove(id)}
        aria-label="remove product"
        data-testid="remove-product-button"
        as="button"
      >
        Remove
      </RemoveItem>
    </Wrapper>
  );
}

export default CartItemControls;
