import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { default as DefaultPaymentCard } from '../PaymentCard';

const Wrapper = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

function PaymentCard({ cardNumber }) {
  return (
    <Wrapper>
      <DefaultPaymentCard cardNumber={cardNumber} />
    </Wrapper>
  );
}

PaymentCard.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default PaymentCard;
