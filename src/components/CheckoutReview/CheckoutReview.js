import React from 'react';

import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import PaymentInformation from '../PaymentInformation';
import ShippingDetails from '../ShippingDetails';

function CheckoutReview() {
  return (
    <Page>
      <Content>
        <Headline>Review</Headline>
        <ShippingDetails />
        <PaymentInformation />
      </Content>
      <OrderSummary />
      <NextStep label="Place Order" to="/cart" />
    </Page>
  );
}

export default CheckoutReview;
