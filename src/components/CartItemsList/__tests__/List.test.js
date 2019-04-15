import React from 'react';
import { create } from 'react-test-renderer';

import List from '../List';

describe('COMPONENT - CartItemsList List', () => {
  it('renders ItemsList component', () => {
    const component = create(<List />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
