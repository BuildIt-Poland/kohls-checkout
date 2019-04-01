import React from 'react';
import { create } from 'react-test-renderer';

import CheckoutPayment from '../CheckoutPayment';

jest.mock('../../OrderSummary', () => 'OrderSummary');
jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - CheckoutPayment', () => {
  it('renders CheckoutPayment component', () => {
    const component = create(<CheckoutPayment />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
