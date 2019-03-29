import React from 'react';
import renderer from 'react-test-renderer';

import Price from '../Price';

describe('COMPONENT - Price', () => {
  it('render Price component', () => {
    const component = renderer.create(<Price />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
