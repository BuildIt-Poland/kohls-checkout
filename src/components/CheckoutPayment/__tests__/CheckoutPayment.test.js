import React from 'react';
import { create } from 'react-test-renderer';

import CheckoutPayment from '../CheckoutPayment';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../SectionHeader', () => 'SectionHeader');
jest.mock('../../OrderSummary', () => 'OrderSummary');
jest.mock('../../NextStep', () => 'NextStep');
jest.mock('../Form', () => 'Form');
jest.mock('../../Headline', () => 'Headline');
jest.mock('../../Page', () => 'Page');

describe('COMPONENT - CheckoutPayment', () => {
  it('renders CheckoutPayment component', () => {
    const props = {
      history: {
        push: jest.fn(),
        location: {
          pathname: ''
        }
      },
      initialPaymentInfo: {
        cardNumber: '5270708324803741',
        expMonth: 9,
        expYear: 22,
        securityCode: 321
      },
      setPaymentInfo: jest.fn()
    };

    const component = create(<CheckoutPayment {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
