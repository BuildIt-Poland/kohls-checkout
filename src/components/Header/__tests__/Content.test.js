import React from 'react';
import { create } from 'react-test-renderer';

import Content from '../Content';

describe('COMPONENT - Header Content', () => {
  it('renders correctly', () => {
    const component = create(<Content />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
