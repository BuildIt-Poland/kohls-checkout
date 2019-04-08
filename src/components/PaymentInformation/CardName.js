import React from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../SectionHeader';
import { getCreditCardType } from '../../utils/creditCardType';

function CardName({ cardNumber }) {
  const renderCardName = () => {
    const cardType = getCreditCardType(cardNumber);

    switch (cardType) {
      case 'VISA':
        return <SectionHeader bold>Visa</SectionHeader>;
      case 'MASTER_CARD':
        return <SectionHeader bold>Master Card</SectionHeader>;
      case 'AM_EX':
        return <SectionHeader bold>American Express</SectionHeader>;
      default:
        return null;
    }
  };

  return <>{renderCardName()}</>;
}

CardName.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default CardName;
