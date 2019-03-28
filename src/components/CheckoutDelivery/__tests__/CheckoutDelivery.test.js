import React from 'react';
import renderer from 'react-test-renderer';

import CheckoutDelivery from '../CheckoutDelivery';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - CheckoutDelivery', () => {
  it('renders CheckoutDelivery component', () => {
    const component = renderer.create(<CheckoutDelivery />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
