import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../SectionHeader';
import { AMEX, MASTERCARD, VISA } from '../../constants/paymentCardsTypes';

const Text = styled(SectionHeader)`
  grid-column-start: 2;
  grid-row-start: 2;
`;

function CardName({ cardNumber }) {
  return (
    <>
      {(() => {
        switch (true) {
          case VISA().test(cardNumber):
            return <Text>Visa</Text>;
          case MASTERCARD().test(cardNumber):
            return <Text>Master Card</Text>;
          case AMEX().test(cardNumber):
            return <Text>American Express</Text>;
          default:
            return null;
        }
      })()}
    </>
  );
}

export default CardName;
