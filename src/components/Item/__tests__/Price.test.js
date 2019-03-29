import React from 'react';
import { create } from 'react-test-renderer';

import Price from '../Price';

describe('COMPONENT - Price', () => {
  it('renders Price component', () => {
    const component = create(<Price />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
