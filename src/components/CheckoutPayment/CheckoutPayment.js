import React from 'react';

import NextStep from '../NextStep';
import CheckBox from '../CheckBox';
import { CHECKOUT_REVIEW_PATH } from '../../constants/routes';

function CheckoutPayment() {
  return (
    <>
      <section>
        <h3>CheckoutPayment placeholder</h3>
        <CheckBox checked={true} labelText="Same as Shoping Address" />
      </section>
      <NextStep label="Review Order" to={CHECKOUT_REVIEW_PATH} />
    </>
  );
}

export default CheckoutPayment;
