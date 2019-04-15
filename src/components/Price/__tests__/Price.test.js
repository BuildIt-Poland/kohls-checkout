import React from 'react';
import { create } from 'react-test-renderer';

import Price from '../Price';

describe('COMPONENT - Price', () => {
  it('renders correctly', () => {
    const component = create(<Price price={12800} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
