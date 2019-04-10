import React from 'react';
import { create } from 'react-test-renderer';

import Chevron from '../Chevron';

describe('COMPONENT - Icons Chevron', () => {
  it('renders correctly', () => {
    const component = create(<Chevron />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
