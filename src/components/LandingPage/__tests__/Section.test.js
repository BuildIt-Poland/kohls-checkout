import React from 'react';
import { create } from 'react-test-renderer';

import Section from '../Section';

describe('COMPONENT - LandingPage Section', () => {
  it('renders correctly', () => {
    const component = create(<Section />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
