import React from 'react';
import { create } from 'react-test-renderer';

import Quantity from '../Quantity';

describe('COMPONENT - Quantity', () => {
  it('renders Quantity component', () => {
    const component = create(<Quantity />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
