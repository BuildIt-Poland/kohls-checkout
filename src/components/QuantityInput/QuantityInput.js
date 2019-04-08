// Custom quantity control with increase and decrease buttons

import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';
import Quantity from './Quantity';
import Button from './Button';

function QuantityInput({ quantity, decreaseQuantity, increseQuantity }) {
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
      <Quantity>{quantity}</Quantity>
      <Button onClick={increseQuantity} aria-label="increase quantity" data-testid="increase-quantity-button">
        +
      </Button>
    </Layout>
  );
}

QuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increseQuantity: PropTypes.func.isRequired
};

export default QuantityInput;
