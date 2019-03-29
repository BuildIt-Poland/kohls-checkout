import React from 'react';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import NextStep from '../NextStep';

function CheckoutDelivery() {
  return (
    <>
      <section>
        <h3>CheckoutDelivery placeholder</h3>
      </section>
      <NextStep label="Continue to Payment" to={CHECKOUT_PAYMENT_PATH} />
    </>
  );
}

export default CheckoutDelivery;
