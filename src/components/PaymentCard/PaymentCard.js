import React from 'react';
import PropTypes from 'prop-types';

import Visa from './Visa';
import Mastercard from './MasterCard';
import Amex from './Amex';
import { getCreditCardType } from '../../utils/creditCardType';

function PaymentCard({ cardNumber }) {
  const renderCard = () => {
    const cardType = getCreditCardType(cardNumber);

    switch (cardType) {
      case 'VISA':
        return <Visa />;
      case 'MASTER_CARD':
        return <Mastercard />;
      case 'AM_EX':
        return <Amex />;
      default:
        return null;
    }
  };

  return <>{renderCard()}</>;
}

PaymentCard.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default PaymentCard;
