import React from 'react';
import NextStep from '../NextStep';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import OrderSummary from '../OrderSummary';

function CheckoutPayment() {
  return (
    <>
      <section>
        <OrderSummary />
      </section>
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
