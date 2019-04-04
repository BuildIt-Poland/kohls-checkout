import React from 'react';
import Item from '../Item';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import Headline from '../Headline';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Content from './Content';
import Wraper from './Wrapper';

function Cart() {
  return (
    <Wraper>
      <Content as="section">
        <Headline>Cart</Headline>
        <Item />
      </Content>
      <OrderSummary />
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </Wraper>
  );
}

export default Cart;
