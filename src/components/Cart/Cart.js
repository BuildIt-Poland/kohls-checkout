import React from 'react';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import Headline from '../Headline';
import NextStep from '../NextStep';
import ShoppingCart from '../ShoppingCart';
import OrderSummary from '../OrderSummary';
import Content from './Content';

function Cart() {
  return (
    <>
      <Content as="article">
        <Headline>Cart</Headline>
        <ShoppingCart />
        <OrderSummary />
      </Content>
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </>
  );
}

export default Cart;
