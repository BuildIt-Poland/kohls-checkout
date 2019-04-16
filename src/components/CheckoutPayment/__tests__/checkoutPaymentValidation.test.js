import checkoutPaymentValidation from '../checkoutPaymentValidation';

describe('SCHEMA - checkoutPaymentValidation', () => {
  it('is NOT valid for empty values', async () => {
    const isValid = await checkoutPaymentValidation.isValid({
      cardHolderName: '',
      cardNumber: '',
      expMonth: 'MM',
      expYear: 'YY',
      securityCode: ''
    });

    expect(isValid).toEqual(false);
  });

  it('is valid if correct values are provided', async () => {
    const isValid = await checkoutPaymentValidation.isValid({
      cardHolderName: 'John Snow',
      cardNumber: '4444444444444444',
      expMonth: '01',
      expYear: '19',
      securityCode: '123'
    });

    expect(isValid).toEqual(true);
  });

  it('is NOT valid if some values are incorrect', async () => {
    const isValid = await checkoutPaymentValidation.isValid({
      cardHolderName: 'John Snow',
      cardNumber: '4444444444444444',
      expMonth: 'MM',
      expYear: 'YY',
      securityCode: ''
    });

    expect(isValid).toEqual(false);
  });

  it('is NOT valid if cardNumber has string values', async () => {
    const isValid = await checkoutPaymentValidation.isValid({
      cardHolderName: 'John Snow',
      cardNumber: '44444444Aa444444',
      expMonth: '01',
      expYear: '19',
      securityCode: '123'
    });

    expect(isValid).toEqual(false);
  });
});
