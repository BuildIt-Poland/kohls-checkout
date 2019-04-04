import React from 'react';
import { create } from 'react-test-renderer';

import ItemsList from '../ItemsList';

describe('COMPONENT - ItemsList', () => {
  it('renders ItemsList component', () => {
    const component = create(<ItemsList />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
