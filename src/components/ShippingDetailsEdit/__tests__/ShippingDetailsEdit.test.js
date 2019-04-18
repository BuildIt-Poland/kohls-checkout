import React from 'react';
import { create } from 'react-test-renderer';

import ShippingDetailsEdit from '../ShippingDetailsEdit';

jest.mock('react-router-dom', () => ({
  Link: 'MockedLink'
}));
jest.mock('../../AddressDetails', () => 'AddressDetails');
jest.mock('../../ItemsList', () => 'ItemsList');

describe('COMPONENT - ShippingDetailsEdit', () => {
  it('renders ShippingDetailsEdit component', () => {
    const component = create(<ShippingDetailsEdit />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
