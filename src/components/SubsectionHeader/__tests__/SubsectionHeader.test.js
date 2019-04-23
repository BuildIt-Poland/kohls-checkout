import React from 'react';
import { create } from 'react-test-renderer';

import SubsectionHeader from '../SubsectionHeader';

describe('COMPONENT - SubsectionHeader', () => {
  it('renders correctly', () => {
    const component = create(<SubsectionHeader>Subsection!</SubsectionHeader>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
