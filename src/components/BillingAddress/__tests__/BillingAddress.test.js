import React from 'react';
import { create } from 'react-test-renderer';

import BillingAddress from '../BillingAddress';

describe('COMPONENT - BillingAddress', () => {
  it('renders BillingAddress component', () => {
    const address = {
      street: '',
      city: '',
      phoneNumber: ''
    };
    const component = create(<BillingAddress name="Name" address={address} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
