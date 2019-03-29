import React from 'react';
import { create } from 'react-test-renderer';

import TotalPrice from '../TotalPrice';

describe('COMPONENT - TotalPrice', () => {
  it('renders TotalPrice component', () => {
    const component = create(<TotalPrice />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
