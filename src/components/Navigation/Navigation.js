import React from 'react';
import styled from 'styled-components';

import { fontWeightNormal } from '../../styles/designTokens';
import { CHECKOUT_DELIVERY_PATH, CHECKOUT_PAYMENT_PATH, CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import ErrorBoundary from '../ErrorBoundary';
import NavigationButton from './NavigationButton';
import Wrapper from './Wrapper';
import Content from './Content';

const STEPS = {
  DELIVERY: 'delivery',
  PAYMENT: 'payment',
  REVIEW: 'review'
};

const StepNumber = styled.span`
  font-weight: ${fontWeightNormal};
  padding-right: 0.4rem;
`;

function Navigation({ match }) {
  const isStepActive = step => step === match.params.checkoutStep;
  const isStepDelivery = () => match.params.checkoutStep === STEPS.DELIVERY;
  const isStepPayment = () => match.params.checkoutStep === STEPS.PAYMENT;

  return (
    <ErrorBoundary>
      <Wrapper>
        <Content as="nav">
          <NavigationButton to={CHECKOUT_DELIVERY_PATH} isActive={isStepActive(STEPS.DELIVERY)}>
            <StepNumber>1.</StepNumber>Delivery
          </NavigationButton>
          <NavigationButton
            to={CHECKOUT_PAYMENT_PATH}
            isActive={isStepActive(STEPS.PAYMENT)}
            isBlocked={isStepDelivery()}
          >
            <StepNumber>2.</StepNumber>Payment
          </NavigationButton>
          <NavigationButton
            to={CHECKOUT_REVIEW_PATH}
            isActive={isStepActive(STEPS.REVIEW)}
            isBlocked={isStepDelivery() || isStepPayment()}
          >
            <StepNumber>3.</StepNumber>Review
          </NavigationButton>
        </Content>
      </Wrapper>
    </ErrorBoundary>
  );
}

export default Navigation;
