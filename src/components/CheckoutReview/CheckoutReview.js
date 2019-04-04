import React from 'react';

import Page from '../Page';
import Content from '../Content';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';

function CheckoutReview() {
  return (
    <Page>
      <Content>
        <Headline>Review</Headline>
      </Content>
      <OrderSummary />
      <NextStep label="Place Order" to="/cart" />
    </Page>
  );
}

export default CheckoutReview;
