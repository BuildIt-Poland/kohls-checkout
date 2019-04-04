import React from 'react';
import { create } from 'react-test-renderer';

import BillingAddress from '../BillingAddress';

describe('COMPONENT - BillingAddress', () => {
  it('renders BillingAddress component', () => {
    const component = create(<BillingAddress />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
