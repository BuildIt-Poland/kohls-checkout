import { getCreditCardType } from '../creditCardType';

describe('creditCardType.test.js', () => {
  describe('getCreditCard method', () => {
    it('returns UNKNOWN type', () => {
      const cardType = getCreditCardType();

      expect(cardType).toEqual('UNKNOWN');
    });

    it('returns MASTER_CARD type', () => {
      const cardType = getCreditCardType('5274583403795712');

      expect(cardType).toEqual('MASTER_CARD');
    });

    it('returns VISA type', () => {
      const cardType = getCreditCardType('4892265751726193');

      expect(cardType).toEqual('VISA');
    });

    it('returns AM_EX type', () => {
      const cardType = getCreditCardType('377159154382062');

      expect(cardType).toEqual('AM_EX');
    });
  });
});
