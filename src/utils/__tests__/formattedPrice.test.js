import formattedPrice from '../formattedPrice';

describe('FUNC - formattedPrice', () => {
  it('formats price and adds currecy sign', () => {
    expect(formattedPrice(1999)).toEqual('$19.99');
  });

  it('formats price and adds currecy sign', () => {
    expect(formattedPrice(99)).toEqual('$0.99');
  });

  it('formats price and adds currecy sign', () => {
    expect(formattedPrice(299900)).toEqual('$2999.00');
  });
});
