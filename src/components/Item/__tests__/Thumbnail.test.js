import React from 'react';
import { create } from 'react-test-renderer';

import Thumbnail from '../Thumbnail';

describe('COMPONENT - Item Thumbnail', () => {
  it('renders correctly', () => {
    const component = create(<Thumbnail src="http://taylor.swift.com/pic.jpg" alt="Very nice image" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
