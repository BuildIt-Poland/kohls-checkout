import React from 'react';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import Page from '../Page';
import InfoBanner from '../InfoBanner';
import Headline from '../Headline';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Content from '../Content';
import ItemsList from '../ItemsList';

function Cart() {
  return (
    <>
      <InfoBanner>
        You have received <strong>free shipping</strong>!
      </InfoBanner>
      <Page title="Cart">
        <Content>
          <Headline>Cart</Headline>
          <ItemsList />
        </Content>
        <OrderSummary />
        <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
      </Page>
    </>
  );
}

export default Cart;
