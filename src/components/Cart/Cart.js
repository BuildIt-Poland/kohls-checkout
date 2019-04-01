import React from 'react';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import NextStep from '../NextStep';
import ShoppingCart from '../ShoppingCart';

function Cart() {
  return (
    <>
      <section>
        <ShoppingCart />
      </section>
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </>
  );
}

export default Cart;
