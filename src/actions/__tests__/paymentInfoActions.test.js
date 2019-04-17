import { setPaymentInfo } from '../paymentInfoActions';
import { CHECKOUT_SET_PAYMENT_INFO } from '../../constants/actionTypes';

describe('ACTIONS - ShippingAddress actions', () => {
  it('creates an action to set payment info', () => {
    const paymentInfo = {
      cardNumber: '5270708324803741',
      expMonth: 9,
      expYear: 22,
      securityCode: 321
    };

    const expectedAction = {
      type: CHECKOUT_SET_PAYMENT_INFO,
      paymentInfo
    };

    expect(setPaymentInfo(paymentInfo)).toEqual(expectedAction);
  });
});
