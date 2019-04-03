import React from 'react';

import NextStep from '../NextStep';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import OrderSummary from '../OrderSummary';
import Checkbox from '../Checkbox';

function CheckoutPayment() {
  return (
    <>
      <section>
        <OrderSummary />
        <Checkbox checked={true} label="Same as Shoping Address" />
      </section>
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
