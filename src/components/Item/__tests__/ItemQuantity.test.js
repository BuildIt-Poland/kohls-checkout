import React from 'react';
import renderer from 'react-test-renderer';

import ItemQuantity from '../ItemQuantity';

describe('COMPONENT - ItemQuantity', () => {
  it('render ItemQuantity component', () => {
    const component = renderer.create(<ItemQuantity />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
