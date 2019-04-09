import React from 'react';

import QuantityInput from '../QuantityInput';
import Wrapper from './Wrapper';
import RemoveItem from './RemoveItem';

function CartItemControls() {
  return (
    <Wrapper>
      <QuantityInput quantity={1} />
      <RemoveItem aria-label="remove product" data-testid="remove-product-button" as="button">
        Remove
      </RemoveItem>
    </Wrapper>
  );
}

export default CartItemControls;
