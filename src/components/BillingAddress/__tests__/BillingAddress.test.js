import React from 'react';
import { create } from 'react-test-renderer';

import BillingAddress from '../BillingAddress';

jest.mock('../../SectionHeader', () => 'SectionHeader');

describe('COMPONENT - BillingAddress', () => {
  it('renders BillingAddress component', () => {
    const address = {
      street: '228 Park Ave S',
      city: 'New York, NY 10003',
      phoneNumber: '(444) 444-4444'
    };
    const component = create(<BillingAddress name="John Robinson" address={address} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
