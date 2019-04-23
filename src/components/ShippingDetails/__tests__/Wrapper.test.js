import React from 'react';
import { create } from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('COMPONENT - ShippingDetails Wrapper', () => {
  it('renders correctly', () => {
    const component = create(<Wrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
