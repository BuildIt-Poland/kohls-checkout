import React from 'react';
import { create } from 'react-test-renderer';

import Text from '../Text';

describe('COMPONENT - ShippingAddressForm Text', () => {
  it('renders RemoveButton component', () => {
    const component = create(<Text />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
