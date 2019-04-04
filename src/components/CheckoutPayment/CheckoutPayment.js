import React from 'react';

import NextStep from '../NextStep';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';

function CheckoutPayment() {
  return (
    <>
      <Headline>Payment</Headline>
      <OrderSummary />
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
