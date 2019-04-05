import React from 'react';
import PropTypes from 'prop-types';

import Visa from './Visa';
import Mastercard from './MasterCard';
import Amex from './Amex';
import { AMEX, MASTERCARD, VISA } from '../../constants/paymentCardsTypes';

function PaymentCard({ cardNumber }) {
  return (
    <>
      {(() => {
        switch (true) {
          case VISA().test(cardNumber):
            return <Visa />;
          case MASTERCARD().test(cardNumber):
            return <Mastercard />;
          case AMEX().test(cardNumber):
            return <Amex />;
          default:
            return null;
        }
      })()}
    </>
  );
}

PaymentCard.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default PaymentCard;
