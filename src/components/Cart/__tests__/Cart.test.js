import React from 'react';
import renderer from 'react-test-renderer';

import Cart from '../Cart';

describe('COMPONENT - Cart', () => {
  it('render Cart component', () => {
    const component = renderer.create(<Cart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
