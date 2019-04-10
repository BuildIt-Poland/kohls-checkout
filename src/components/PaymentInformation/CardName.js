import React from 'react';
import PropTypes from 'prop-types';

import { CREDIT_CARD_VISA, CREDIT_CARD_MASTER_CARD, CREDIT_CARD_AM_EX } from '../../constants/creditCardTypes';
import { creditCardType } from '../../utils/index';
import SectionHeader from '../SectionHeader';

export function creditCardName(cardNumber) {
  const cardType = creditCardType(cardNumber);

  switch (cardType) {
    case CREDIT_CARD_VISA:
      return 'Visa';
    case CREDIT_CARD_MASTER_CARD:
      return 'Master Card';
    case CREDIT_CARD_AM_EX:
      return 'American Express';
    default:
      return null;
  }
}

function CardName({ cardNumber }) {
  return <SectionHeader bold>{creditCardName(cardNumber)}</SectionHeader>;
}

CardName.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default CardName;
