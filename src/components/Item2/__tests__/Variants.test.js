import React from 'react';
import { create } from 'react-test-renderer';

import Variants from '../Variants';

describe('COMPONENT - Item Variants', () => {
  it('renders correctly when both size and color are provided', () => {
    const variants = {
      color: 'Blue',
      size: '42 Small'
    };

    const component = create(<Variants variants={variants} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly when only color is provided', () => {
    const variants = {
      color: 'Blue'
    };

    const component = create(<Variants variants={variants} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly when only size is provided', () => {
    const variants = {
      size: '42 Small'
    };

    const component = create(<Variants variants={variants} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
