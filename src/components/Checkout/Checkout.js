import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import {
  CHECKOUT_DELIVERY_PATH,
  CHECKOUT_PAYMENT_PATH,
  CHECKOUT_REVIEW_PATH,
  CHECKOUT_PATH
} from '../../constants/routes';
import CheckoutDelivery from '../CheckoutDelivery';
import CheckoutPayment from '../CheckoutPayment';
import CheckoutReview from '../CheckoutReview';
import Navigation from '../Navigation';

const Wrapper = styled.section`
  margin-top: 100px;
`;

function Checkout() {
  return (
    <>
      <Route path={CHECKOUT_PATH} component={Navigation} />
      <Wrapper>
        <Route path={CHECKOUT_DELIVERY_PATH} component={CheckoutDelivery} />
        <Route path={CHECKOUT_PAYMENT_PATH} component={CheckoutPayment} />
        <Route path={CHECKOUT_REVIEW_PATH} component={CheckoutReview} />
      </Wrapper>
    </>
  );
}

export default Checkout;
