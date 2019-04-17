import React from 'react';
import PropTypes from 'prop-types';

import { CREDIT_CARD_VISA, CREDIT_CARD_MASTER_CARD, CREDIT_CARD_AM_EX } from '../../constants/creditCardTypes';
import { creditCardType } from '../../utils';
import Visa from './Visa';
import Mastercard from './MasterCard';
import Amex from './Amex';

const icons = [
  {
    component: <Chevron />,
    name: 'Chevron'
  },
  {
    component: <Cross />,
    name: 'Chevron'
  },
  {
    component: <Cart />,
    name: 'Chevron'
  },
  {
    component: <InfoCircle />,
    name: 'Chevron'
  },
  {
    component: <Shipping />,
    name: 'Chevron'
  },
  {
    component: <Tick />,
    name: 'Chevron'
  }
];

function PaymentCard({ cardNumber }) {
  return (
    <>
      {(() => {
        const cardType = creditCardType(cardNumber);
        switch (cardType) {
          case CREDIT_CARD_VISA:
            return <Visa />;
          case CREDIT_CARD_MASTER_CARD:
            return <Mastercard />;
          case CREDIT_CARD_AM_EX:
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
