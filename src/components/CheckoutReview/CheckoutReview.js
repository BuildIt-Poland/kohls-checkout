import React from 'react';

import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import PaymentInformation from '../PaymentInformation';
import ShippingSummary from '../ShippingSummary';

function CheckoutReview() {
  return (
    <Page title="Review">
      <Content as="div">
        <Headline>Review</Headline>
      </Content>
      <ShippingSummary />
      <PaymentInformation />
      <OrderSummary />
      <NextStep label="Place Order" to="/cart" />
    </Page>
  );
}

export default CheckoutReview;
