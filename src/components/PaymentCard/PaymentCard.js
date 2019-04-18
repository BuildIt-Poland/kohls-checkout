import React from 'react';
import PropTypes from 'prop-types';

import { CREDIT_CARD_VISA, CREDIT_CARD_MASTER_CARD, CREDIT_CARD_AM_EX } from '../../constants/creditCardTypes';
import { creditCardType } from '../../utils';
import Visa from './Visa';
import Mastercard from './MasterCard';
import Amex from './Amex';

function PaymentCard({ cardNumber, small }) {
  const cardType = creditCardType(cardNumber);

  switch (cardType) {
    case CREDIT_CARD_VISA:
      return <Visa small={small} />;
    case CREDIT_CARD_MASTER_CARD:
      return <Mastercard small={small} />;
    case CREDIT_CARD_AM_EX:
      return <Amex small={small} />;
    default:
      return null;
  }
}

PaymentCard.propTypes = {
  cardNumber: PropTypes.string.isRequired,
  small: PropTypes.bool
};

export default PaymentCard;
