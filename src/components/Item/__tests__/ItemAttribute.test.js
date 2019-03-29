import React from 'react';
import renderer from 'react-test-renderer';

import ItemAttribute from '../ItemAttribute';

describe('COMPONENT - ItemAttribute', () => {
  it('render ItemAttribute component', () => {
    const component = renderer.create(<ItemAttribute />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
