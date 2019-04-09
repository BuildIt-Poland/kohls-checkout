import React from 'react';
import { create } from 'react-test-renderer';

import MasterCard from '../MasterCard';

describe('COMPONENT - Icons MasterCard', () => {
  it('renders correctly', () => {
    const component = create(<MasterCard />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
