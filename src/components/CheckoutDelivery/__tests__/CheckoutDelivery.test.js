import React from 'react';
import { create } from 'react-test-renderer';

import CheckoutDelivery from '../CheckoutDelivery';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - CheckoutDelivery', () => {
  it('renders CheckoutDelivery component', () => {
    const component = create(<CheckoutDelivery />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});