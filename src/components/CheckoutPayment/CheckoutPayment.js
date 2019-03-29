import React from 'react';
import NextStep from '../NextStep';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';

function CheckoutPayment() {
  return (
    <>
      <section>
        <h3>CheckoutPayment placeholder</h3>
      </section>
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
