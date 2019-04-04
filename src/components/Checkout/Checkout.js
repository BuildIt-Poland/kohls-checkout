import React from 'react';
import { Route } from 'react-router-dom';

import { CHECKOUT_DELIVERY_PATH, CHECKOUT_PAYMENT_PATH, CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import CheckoutDelivery from '../CheckoutDelivery';
import CheckoutPayment from '../CheckoutPayment';
import CheckoutReview from '../CheckoutReview';
import Navigation from '../Navigation';

function Checkout() {
  return (
    <>
      <Navigation />
      <Route path={CHECKOUT_DELIVERY_PATH} component={CheckoutDelivery} />
      <Route path={CHECKOUT_PAYMENT_PATH} component={CheckoutPayment} />
      <Route path={CHECKOUT_REVIEW_PATH} component={CheckoutReview} />
    </>
  );
}

export default Checkout;
