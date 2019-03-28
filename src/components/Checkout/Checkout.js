import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import CheckoutDelivery from '../CheckoutDelivery';
import CheckoutPayment from '../CheckoutPayment';
import CheckoutReview from '../CheckoutReview';
import Navigation from '../Navigation';
import { CHECKOUT_DELIVERY, CHECKOUT_PAYMENT, CHECKOUT_REVIEW, CHECKOUT } from '../../constants/routes';

const Wrapper = styled.section`
  margin-top: 100px;
`;

function Checkout() {
  return (
    <>
      <Route path={CHECKOUT} component={Navigation} />
      <Wrapper>
        <Route path={CHECKOUT_DELIVERY} component={CheckoutDelivery} />
        <Route path={CHECKOUT_PAYMENT} component={CheckoutPayment} />
        <Route path={CHECKOUT_REVIEW} component={CheckoutReview} />
      </Wrapper>
    </>
  );
}

export default Checkout;
