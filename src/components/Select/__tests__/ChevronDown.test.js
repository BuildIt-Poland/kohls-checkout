import React from 'react';
import { create } from 'react-test-renderer';

import ChevronDown from '../ChevronDown';

jest.mock('../../Icons/Chevron', () => 'Chevron');

describe('COMPONENT - Select ChevronDown', () => {
  it('renders correctly', () => {
    const component = create(<ChevronDown />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
