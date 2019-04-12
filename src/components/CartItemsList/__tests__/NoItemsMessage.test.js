import React from 'react';
import { create } from 'react-test-renderer';

import NoItemsMessage from '../NoItemsMessage';

describe('COMPONENT - CartItemsList NoItemsMessage', () => {
  it('renders ItemsList component', () => {
    const component = create(<NoItemsMessage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
