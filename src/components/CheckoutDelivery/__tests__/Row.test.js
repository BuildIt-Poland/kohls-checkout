import React from 'react';
import { create } from 'react-test-renderer';

import Row from '../Row';

describe('COMPONENT - ShippingAddressForm Row', () => {
  it('renders RemoveButton component', () => {
    const component = create(<Row />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
