import React from 'react';

import { CHECKOUT_DELIVERY_PATH, CHECKOUT_PAYMENT_PATH, CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import NavigationButton from './NavigationButton';
import Wrapper from './Wrapper';
import Content from './Content';

const STEPS = {
  DELIVERY: 'delivery',
  PAYMENT: 'payment',
  REVIEW: 'review'
};

function Navigation({ match }) {
  const isStepActive = step => step === match.params.checkoutStep;

  return (
    <Wrapper>
      <Content as="nav">
        <NavigationButton to={CHECKOUT_DELIVERY_PATH} isActive={isStepActive(STEPS.DELIVERY)}>
          1. Delivery
        </NavigationButton>
        <NavigationButton to={CHECKOUT_PAYMENT_PATH} isActive={isStepActive(STEPS.PAYMENT)}>
          2. Payment
        </NavigationButton>
        <NavigationButton to={CHECKOUT_REVIEW_PATH} isActive={isStepActive(STEPS.REVIEW)}>
          3. Review
        </NavigationButton>
      </Content>
    </Wrapper>
  );
}

export default Navigation;
