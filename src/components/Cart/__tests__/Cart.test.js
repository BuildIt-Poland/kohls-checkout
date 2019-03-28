import React from 'react';
import { create } from 'react-test-renderer';

import Cart from '../Cart';

describe('COMPONENT - Cart', () => {
  it('render Cart component', () => {
    const component = create(<Cart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
