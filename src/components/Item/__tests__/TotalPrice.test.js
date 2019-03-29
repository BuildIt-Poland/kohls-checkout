import React from 'react';
import renderer from 'react-test-renderer';

import TotalPrice from '../TotalPrice';

describe('COMPONENT - TotalPrice', () => {
  it('render TotalPrice component', () => {
    const component = renderer.create(<TotalPrice />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
