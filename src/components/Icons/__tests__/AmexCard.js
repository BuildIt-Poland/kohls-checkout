import React from 'react';
import { create } from 'react-test-renderer';

import AmexCard from '../AmexCard';

describe('COMPONENT - Icons AmexCard', () => {
  it('renders correctly', () => {
    const component = create(<AmexCard />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
