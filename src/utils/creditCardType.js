import {
  CREDIT_CARD_VISA,
  CREDIT_CARD_MASTER_CARD,
  CREDIT_CARD_AM_EX,
  CREDIT_CARD_UNKNOWN
} from '../constants/creditCardTypes';

const creditCardType = (cardNumber = '') => {
  if (cardNumber.match(/^4[0-9]{5}/gi)) {
    return CREDIT_CARD_VISA;
  } else if (cardNumber.match(/^5[1-5][0-9]{4}/gi)) {
    return CREDIT_CARD_MASTER_CARD;
  } else if (cardNumber.match(/^3[47][0-9]{3}/gi)) {
    return CREDIT_CARD_AM_EX;
  }

  return CREDIT_CARD_UNKNOWN;
};

export default creditCardType;
