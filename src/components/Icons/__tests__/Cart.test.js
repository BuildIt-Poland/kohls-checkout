import React from 'react';
import { create } from 'react-test-renderer';

import Cart from '../Cart';

describe('COMPONENT - Icons Cart', () => {
  it('renders correctly', () => {
    const component = create(<Cart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
