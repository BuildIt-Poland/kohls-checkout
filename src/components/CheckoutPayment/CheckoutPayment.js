import React from 'react';

import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import Page from '../Page';
import Content from '../Content';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';

function CheckoutPayment() {
  return (
    <Page title="Payment">
      <Content>
        <Headline>Payment</Headline>
      </Content>
      <OrderSummary />
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </Page>
  );
}

export default CheckoutPayment;
