import React from 'react';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import NextStep from '../NextStep';
import ShoppingCart from '../ShoppingCart';
import OrderSummary from '../OrderSummary';

function Cart() {
  return (
    <>
      <section>
        <ShoppingCart />
        <OrderSummary />
      </section>
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </>
  );
}

export default Cart;
