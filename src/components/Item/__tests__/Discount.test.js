import React from 'react';
import { create } from 'react-test-renderer';

import Discount from '../Discount';

describe('COMPONENT - Item Discount', () => {
  it('renders correctly', () => {
    const component = create(<Discount />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
