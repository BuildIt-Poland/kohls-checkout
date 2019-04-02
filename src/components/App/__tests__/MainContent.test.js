import React from 'react';
import { create } from 'react-test-renderer';

import MainContent from '../MainContent';

describe('COMPONENT - App MainContent', () => {
  it('renders correctly', () => {
    const component = create(<MainContent />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
