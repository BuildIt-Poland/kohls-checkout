import React from 'react';
import styled from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';
import PaymentCard from '../PaymentCard';

const Wrapper = styled.span`
  position: absolute;
  top: 3.5rem;
  right: 0.7rem;
  z-index: ${zIndexDefault};
`;

function Icon({ value }) {
  return (
    <Wrapper>
      <PaymentCard cardNumber={value} small />
    </Wrapper>
  );
}

export default Icon;
