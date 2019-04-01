import React from 'react';
import Item from '../Item';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Divider from '../Divider';

function Cart() {
  return (
    <>
      <section>
        <Item />
        <Divider />
        <OrderSummary />
      </section>
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </>
  );
}

export default Cart;
