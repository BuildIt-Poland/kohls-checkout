import React from 'react';
import { create } from 'react-test-renderer';

import TotalPrice from '../TotalPrice';

describe('COMPONENT - OrderSummary TotalPrice', () => {
  it('renders TotalPrice component', () => {
    const component = create(<TotalPrice price={1280000} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
