import React from 'react';
import renderer from 'react-test-renderer';

import DiscountPrice from '../DiscountPrice';

describe('COMPONENT - DiscountPrice', () => {
  it('render DiscountPrice component', () => {
    const component = renderer.create(<DiscountPrice />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
