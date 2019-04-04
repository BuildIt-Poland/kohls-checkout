import React from 'react';

import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import PaymentInformation from '../PaymentInformation';
import ShippingDetails from '../ShippingDetails';

function CheckoutReview() {
  return (
    <>
      <ShippingDetails />
      <PaymentInformation />
      <OrderSummary />
      <NextStep label="Place Order" to="/cart" />
    </>
  );
}

export default CheckoutReview;
