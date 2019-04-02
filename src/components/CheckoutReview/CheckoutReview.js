import React from 'react';

import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';

function CheckoutReview() {
  return (
    <>
      <section>
        <OrderSummary />
      </section>
      <NextStep label="Place Order" to="/cart" />
    </>
  );
}

export default CheckoutReview;
