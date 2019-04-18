import reducer from '../paymentInfoReducer';
import { CHECKOUT_SET_PAYMENT_INFO } from '../../constants/actionTypes';

const initialState = {
  cardNumber: '',
  expMonth: 'MM',
  expYear: 'YY',
  securityCode: ''
};

describe('REDUCER - shipping addressReducer reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('correctly handles action CHECKOUT_SET_PAYMENT_INFO', () => {
    const paymentInfo = {
      cardNumber: '5270708324803741',
      expMonth: 9,
      expYear: 22,
      securityCode: 321
    };

    const action = {
      type: CHECKOUT_SET_PAYMENT_INFO,
      paymentInfo
    };

    const expectedState = {
      cardNumber: '5270708324803741',
      expMonth: 9,
      expYear: 22,
      securityCode: 321
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('correctly updates state with CHECKOUT_SET_PAYMENT_INFO action', () => {
    const updatedInitialState = {
      cardNumber: '5270708324803741',
      expMonth: 9,
      expYear: 22,
      securityCode: 321
    };

    const paymentInfo = {
      cardNumber: '5270708324803741',
      expMonth: 12,
      expYear: 24,
      securityCode: 111
    };

    const action = {
      type: CHECKOUT_SET_PAYMENT_INFO,
      paymentInfo
    };

    const expectedState = {
      cardNumber: '5270708324803741',
      expMonth: 12,
      expYear: 24,
      securityCode: 111
    };

    Object.freeze(updatedInitialState);
    Object.freeze(action);

    expect(reducer(updatedInitialState, action)).toEqual(expectedState);
  });
});
