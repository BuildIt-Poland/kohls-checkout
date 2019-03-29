import React from 'react';
import { create } from 'react-test-renderer';

import Image from '../Image';

describe('COMPONENT - Image', () => {
  it('renders Image component', () => {
    const component = create(<Image />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
