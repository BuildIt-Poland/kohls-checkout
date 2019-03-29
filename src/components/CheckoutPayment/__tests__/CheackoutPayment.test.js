import React from 'react';
import renderer from 'react-test-renderer';

import CheckoutPayment from '../CheckoutPayment';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - CheckoutPayment', () => {
  it('renders CheckoutPayment component', () => {
    const component = renderer.create(<CheckoutPayment />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
