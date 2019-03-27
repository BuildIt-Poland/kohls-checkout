import React from 'react';
import { Route } from 'react-router-dom';

import CheckoutDelivery from '../CheckoutDelivery';
import CheckoutPayment from '../CheckoutPayment';
import CheckoutReview from '../CheckoutReview';

function Checkout() {
  return (
    <section>
      <h2>Checkout placeholder</h2>
      <Route path="/checkout/delivery" component={CheckoutDelivery} />
      <Route path="/checkout/payment" component={CheckoutPayment} />
      <Route path="/checkout/review" component={CheckoutReview} />
    </section>
  );
}

export default Checkout;
