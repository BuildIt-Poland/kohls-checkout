import React from 'react';

import NextStep from '../NextStep';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import OrderSummary from '../OrderSummary';
import CheckBox from '../CheckBox';

function CheckoutPayment() {
  return (
    <>
      <section>
        <OrderSummary />
        <CheckBox checked={true} labelText="Same as Shoping Address" />
      </section>
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
