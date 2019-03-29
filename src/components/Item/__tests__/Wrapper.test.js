import React from 'react';
import { create } from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('COMPONENT - Wrapper', () => {
  it('renders Wrapper component', () => {
    const component = create(<Wrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
