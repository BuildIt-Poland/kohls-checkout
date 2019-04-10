import { number } from 'card-validator';

const getPotentialCardRules = cardNumber => {
  const result = number(cardNumber);

  if (result.card && result.card.type) {
    return {
      type: result.card.type,
      maxLength: result.card.lengths.pop(),
      securityCode: {
        size: result.card.code.size
      }
    };
  } else return null;
};

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

export { getPotentialCardRules, isNumber };
