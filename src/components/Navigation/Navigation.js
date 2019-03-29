import React from 'react';
import styled from 'styled-components';

import { CHECKOUT_DELIVERY, CHECKOUT_PAYMENT, CHECKOUT_REVIEW } from '../../constants/routes';
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
      <NavigationButton to={CHECKOUT_DELIVERY} isActive={isStepActive('delivery')}>
        Delivery
      </NavigationButton>
      <NavigationButton to={CHECKOUT_PAYMENT} isActive={isStepActive('payment')}>
        Payment
      </NavigationButton>
      <NavigationButton to={CHECKOUT_REVIEW} isActive={isStepActive('review')}>
        Review
      </NavigationButton>
    </Wrapper>
  );
}

export default Navigation;
