import React from 'react';

import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';

function CheckoutReview() {
  return (
    <>
      <Headline>Review</Headline>
      <OrderSummary />
      <NextStep label="Place Order" to="/cart" />
    </>
  );
}

export default CheckoutReview;
