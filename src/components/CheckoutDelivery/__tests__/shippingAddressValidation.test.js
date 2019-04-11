import shippingAddressValidation from '../shippingAddressValidation';

describe('SCHEMA - shippingAddressValidation', () => {
  it('is NOT valid for empty values', async () => {
    const isValid = await shippingAddressValidation.isValid({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: ''
    });

    expect(isValid).toEqual(false);
  });

  it('is valid if correct values are provided', async () => {
    const isValid = await shippingAddressValidation.isValid({
      firstName: 'Taylor',
      lastName: 'Swift',
      address: '228 Park Ave S',
      city: 'New York',
      state: 'NY',
      zipCode: '10003-1502',
      phone: '444 444 444'
    });

    expect(isValid).toEqual(true);
  });

  it('is NOT valid if some values are incorrect', async () => {
    const isValid = await shippingAddressValidation.isValid({
      firstName: 'Taylor',
      lastName: 'Swift',
      address: '',
      city: 'New York',
      state: 'NYCX',
      zipCode: '10003-1502',
      phone: '444 444 444'
    });

    expect(isValid).toEqual(false);
  });
});
