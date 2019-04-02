import React from 'react';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import NextStep from '../NextStep';
import Headline from '../Headline';

function CheckoutDelivery() {
  return (
    <>
      <Headline>Delivery</Headline>
      <NextStep label="Continue to Payment" to={CHECKOUT_PAYMENT_PATH} />
    </>
  );
}

export default CheckoutDelivery;
