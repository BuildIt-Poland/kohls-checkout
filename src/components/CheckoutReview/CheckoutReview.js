import React from 'react';

import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import PaymentInformation from '../PaymentInformation';
import ShippingDetailsEdit from '../ShippingDetailsEdit';

function CheckoutReview() {
  return (
    <Page title="Review">
      <Content>
        <Headline>Review</Headline>
      </Content>
      <ShippingDetailsEdit />
      <PaymentInformation />
      <OrderSummary />
      <NextStep label="Place Order" to="/cart" />
    </Page>
  );
}

export default CheckoutReview;
