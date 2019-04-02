import React from 'react';
import Item from '../Item';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';

function Cart() {
  return (
    <>
      <section>
        <Item />
        <OrderSummary />
      </section>
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </>
  );
}

export default Cart;
