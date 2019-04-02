import React from 'react';
import { create } from 'react-test-renderer';

import SectionHeader from '../SectionHeader';

describe('COMPONENT - SectionHeader', () => {
  it('renders SectionHeader component', () => {
    const component = create(<SectionHeader />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
