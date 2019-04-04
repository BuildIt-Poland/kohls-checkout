import React from 'react';
import { create } from 'react-test-renderer';

import Body from '../Body';

describe('COMPONENT - Modal Body', () => {
  it('renders correctly', () => {
    const component = create(<Body />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
