import React from 'react';
import PropTypes from 'prop-types';

import { AMEX, MASTERCARD, VISA } from '../../constants/paymentCardsTypes';
import SectionHeader from '../SectionHeader';

function CardName({ cardNumber }) {
  return (
    <>
      {(() => {
        switch (true) {
          case VISA().test(cardNumber):
            return <SectionHeader bold>Visa</SectionHeader>;
          case MASTERCARD().test(cardNumber):
            return <SectionHeader bold>Master Card</SectionHeader>;
          case AMEX().test(cardNumber):
            return <SectionHeader bold>American Express</SectionHeader>;
          default:
            return null;
        }
      })()}
    </>
  );
}

CardName.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default CardName;
