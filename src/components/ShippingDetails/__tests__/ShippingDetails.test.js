import React from 'react';
import { create } from 'react-test-renderer';

import ShippingDetails from '../ShippingDetails';

jest.mock('../../Icons/Shipping', () => 'Shipping');

function mockDate() {
  const mockedDate = new Date(2011, 11, 10);
  const originalDate = Date;
  global.Date = jest.fn(() => mockedDate);
  global.Date.getDate = originalDate.getDate;
}

describe('COMPONENT - ShippingDetails', () => {
  it('Renders correctly ShippingDetails component', () => {
    mockDate();

    const component = create(<ShippingDetails />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
