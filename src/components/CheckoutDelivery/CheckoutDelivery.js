import React from 'react';
import NextStep from '../NextStep';
import { CHECKOUT_PAYMENT } from '../../constants/routes';

function CheckoutDelivery() {
  return (
    <>
      <section>
        <h3>CheckoutDelivery placeholder</h3>
      </section>
      <NextStep label="Continue to Payment" to={CHECKOUT_PAYMENT} />
    </>
  );
}

export default CheckoutDelivery;
