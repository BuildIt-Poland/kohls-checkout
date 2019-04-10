import React from 'react';
import { create } from 'react-test-renderer';

import Quantity from '../Quantity';

describe('COMPONENT - Item Page', () => {
  it('renders correctly', () => {
    const component = create(<Quantity />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
