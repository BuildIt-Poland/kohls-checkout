import React from 'react';
import { create } from 'react-test-renderer';

import Chevron from '../Chevron';

jest.mock('../../Icons', () => ({
  Chevron: 'ChevronIcon'
}));

describe('COMPONENT - FormSelect Chevron', () => {
  it('renders correctly', () => {
    const component = create(<Chevron />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
