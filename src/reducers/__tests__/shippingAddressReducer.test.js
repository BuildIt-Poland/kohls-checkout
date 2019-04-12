import reducer from '../shippingAddressReducer';
import { CHECKOUT_SET_SHIPPING_ADDRESS } from '../../constants/actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  phone: ''
};

describe('REDUCER - shipping addressReducer reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('correctly handles action CHECKOUT_SET_SHIPPING_ADDRESS', () => {
    const shippingAddress = {
      firstName: 'Taylor',
      lastName: 'Swift',
      street: '228 Park Ave S',
      city: 'New York',
      state: 'NY',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };

    const action = {
      type: CHECKOUT_SET_SHIPPING_ADDRESS,
      shippingAddress
    };

    const expectedState = {
      firstName: 'Taylor',
      lastName: 'Swift',
      street: '228 Park Ave S',
      city: 'New York',
      state: 'NY',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('correctly updates state with CHECKOUT_SET_SHIPPING_ADDRESS action', () => {
    const updatedInitialState = {
      firstName: 'Taylor',
      lastName: 'Swift',
      street: '228 Park Ave S',
      city: 'New York',
      state: 'NY',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };

    const shippingAddress = {
      firstName: 'Taylor',
      lastName: 'Swift',
      street: '228 Park Ave S',
      city: 'New Orlean',
      state: 'NO',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };

    const action = {
      type: CHECKOUT_SET_SHIPPING_ADDRESS,
      shippingAddress
    };

    const expectedState = {
      firstName: 'Taylor',
      lastName: 'Swift',
      street: '228 Park Ave S',
      city: 'New Orlean',
      state: 'NO',
      zipCode: '10003-1502',
      phone: '444 444 444'
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(updatedInitialState, action)).toEqual(expectedState);
  });
});
