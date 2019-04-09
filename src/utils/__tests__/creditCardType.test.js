import creditCardType from '../creditCardType';

describe('creditCardType', () => {
  it('returns UNKNOWN type', () => {
    const cardType = creditCardType('9086');

    expect(cardType).toEqual('UNKNOWN');
  });

  it('returns MASTER_CARD type', () => {
    const cardType = creditCardType('5274583403795712');

    expect(cardType).toEqual('MASTER_CARD');
  });

  it('returns VISA type', () => {
    const cardType = creditCardType('4892265751726193');

    expect(cardType).toEqual('VISA');
  });

  it('returns AM_EX type', () => {
    const cardType = creditCardType('377159154382062');

    expect(cardType).toEqual('AM_EX');
  });
});
