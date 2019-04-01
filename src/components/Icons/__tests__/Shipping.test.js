import React from 'react';
import { create } from 'react-test-renderer';

import Shipping from '../Shipping';

describe('COMPONENT - Icons Shipping', () => {
  it('renders correctly', () => {
    const component = create(<Shipping />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
