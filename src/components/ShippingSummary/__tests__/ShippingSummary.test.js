import React from 'react';
import { create } from 'react-test-renderer';

import ShippingSummary from '../ShippingSummary';

jest.mock('react-router-dom', () => ({
  Link: 'MockedLink'
}));
jest.mock('../../AddressDetails', () => 'AddressDetails');
jest.mock('../../ItemsList', () => 'ItemsList');

describe('COMPONENT - ShippingSummary', () => {
  it('renders ShippingSummary component', () => {
    const component = create(<ShippingSummary />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
