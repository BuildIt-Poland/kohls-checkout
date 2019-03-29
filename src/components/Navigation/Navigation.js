import React from 'react';
import styled from 'styled-components';

import { CHECKOUT_DELIVERY_PATH, CHECKOUT_PAYMENT_PATH, CHECKOUT_REVIEW_PATH } from '../../constants/routes';
import NavigationButton from './NavigationButton';

const Wrapper = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
`;

function Navigation({ match }) {
  const isStepActive = step => step === match.params.checkoutStep;

  return (
    <Wrapper>
      <NavigationButton to={CHECKOUT_DELIVERY_PATH} isActive={isStepActive('delivery')}>
        Delivery
      </NavigationButton>
      <NavigationButton to={CHECKOUT_PAYMENT_PATH} isActive={isStepActive('payment')}>
        Payment
      </NavigationButton>
      <NavigationButton to={CHECKOUT_REVIEW_PATH} isActive={isStepActive('review')}>
        Review
      </NavigationButton>
    </Wrapper>
  );
}

export default Navigation;
