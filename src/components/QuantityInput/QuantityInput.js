// Custom quantity control with increase and decrease buttons

import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import Quantity from './Quantity';
import Button from './Button';

// TODO Add actual input for quantity @blurbyte
function QuantityInput({ quantity, decreaseQuantity, increaseQuantity }) {
  return (
    <Layout>
      <Button
        disabled={quantity <= 1}
        onClick={decreaseQuantity}
        aria-label="decrease quantity"
        data-testid="decrease-quantity-button"
      >
        &ndash;
      </Button>
      <Quantity data-testid="quantity">{quantity}</Quantity>
      <Button onClick={increaseQuantity} aria-label="increase quantity" data-testid="increase-quantity-button">
        +
      </Button>
    </Layout>
  );
}

QuantityInput.propTypes = {
  /** Specifies the quantity value */
  quantity: PropTypes.number.isRequired,
  /** Event handler for onClick decrease quantity button callback  */
  decreaseQuantity: PropTypes.func.isRequired,
  /** Event handler for onClick increase quantity button callback  */
  increaseQuantity: PropTypes.func.isRequired
};

export default QuantityInput;
