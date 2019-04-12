import { setShippingAddress } from '../shippingAddressActions';
import { CHECKOUT_SET_SHIPPING_ADDRESS } from '../../constants/actionTypes';

describe('ACTIONS - ShippingAddress actions', () => {
  it('creates an action to set shipping address', () => {
    const shippingAddress = {
      firstName: 'Taylor',
      lastName: 'Swift',
      address: '228 Park Ave S',
      city: 'New York',
      state: 'NY',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };
    const expectedAction = {
      type: CHECKOUT_SET_SHIPPING_ADDRESS,
      shippingAddress
    };

    expect(setShippingAddress(shippingAddress)).toEqual(expectedAction);
  });
});
