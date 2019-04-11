import React from 'react';
import { create } from 'react-test-renderer';

import ShippingAddressForm from '../ShippingAddressForm';

jest.mock('../../FormInput', () => 'FormInput');

describe('COMPONENT - ShippingAddressForm', () => {
  it('renders correctly', () => {
    const component = create(<ShippingAddressForm />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
