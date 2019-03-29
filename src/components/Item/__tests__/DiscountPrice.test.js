import React from 'react';
import { create } from 'react-test-renderer';

import DiscountPrice from '../DiscountPrice';

describe('COMPONENT - DiscountPrice', () => {
  it('renders DiscountPrice component', () => {
    const component = create(<DiscountPrice />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
