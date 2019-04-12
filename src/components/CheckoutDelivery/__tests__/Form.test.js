import React from 'react';
import { create } from 'react-test-renderer';

import Form from '../Form';

jest.mock('../../FormInput', () => 'FormInput');

describe('COMPONENT - ShippingAddressForm', () => {
  it('renders correctly', () => {
    const component = create(<Form />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
