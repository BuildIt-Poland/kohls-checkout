import React from 'react';
import { create } from 'react-test-renderer';

import Title from '../Title';

describe('COMPONENT - Title', () => {
  it('renders Title component', () => {
    const component = create(<Title />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
