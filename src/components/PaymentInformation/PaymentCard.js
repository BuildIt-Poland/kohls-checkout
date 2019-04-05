import React from 'react';
import styled from 'styled-components';

import { default as DefaultPaymentCard } from '../PaymentCard';

const Wrapper = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
`;

function PaymentCard({ cardNumber }) {
  return (
    <Wrapper>
      <DefaultPaymentCard cardNumber={cardNumber} />
    </Wrapper>
  );
}

export default PaymentCard;
