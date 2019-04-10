import React from 'react';
import { create } from 'react-test-renderer';

import Page from '../Page';

describe('COMPONENT - Page', () => {
  it('renders correctly', () => {
    const component = create(<Page />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
