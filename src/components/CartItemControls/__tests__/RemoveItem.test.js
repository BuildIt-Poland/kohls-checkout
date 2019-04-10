import React from 'react';
import { create } from 'react-test-renderer';

import RemoveItem from '../RemoveItem';

describe('COMPONENT - CartItemControls RemoveItem', () => {
  it('renders correctly', () => {
    const component = create(<RemoveItem />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
