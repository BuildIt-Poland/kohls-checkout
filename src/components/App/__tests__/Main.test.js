import React from 'react';
import { create } from 'react-test-renderer';

import Main from '../MainContent';

describe('COMPONENT - App Main', () => {
  it('renders correctly', () => {
    const component = create(<Main />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
