import React from 'react';

import NextStep from '../NextStep';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import OrderSummary from '../OrderSummary';
import Headline from '../Headline';
import Checkbox from '../Checkbox';

function CheckoutPayment() {
  return (
    <>
      <Headline>Payment</Headline>
      <OrderSummary />
      <Checkbox checked={true} label="test" />
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
