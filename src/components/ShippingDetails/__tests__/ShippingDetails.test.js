import React from 'react';
import { create } from 'react-test-renderer';

import ShippingDetails from '../ShippingDetails';

jest.mock('react-router-dom', () => ({
  Link: 'MockedLink'
}));

describe('COMPONENT - ShippingDetails', () => {
  it('renders ShippingDetails component', () => {
    const component = create(<ShippingDetails />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
