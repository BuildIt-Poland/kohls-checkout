import React from 'react';
import { create } from 'react-test-renderer';

import Attribute from '../Attribute';

describe('COMPONENT - Attribute', () => {
  it('renders Attribute component', () => {
    const component = create(<Attribute />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
