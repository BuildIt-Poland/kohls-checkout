const CREDIT_CARDS = [
  {
    type: 'AM_EX',
    regex: /^3[47][0-9]{3}/gi
  },
  {
    type: 'VISA',
    regex: /^4[0-9]{5}/gi
  },
  {
    type: 'MASTER_CARD',
    regex: /^5[1-5][0-9]{4}/gi
  }
];

export const getCreditCardType = (cardNumber = '') => {
  const creditCard = CREDIT_CARDS.find(({ regex }) => cardNumber.match(regex));

  if (!creditCard) {
    return 'UNKNOWN';
  }

  return creditCard.type;
};
