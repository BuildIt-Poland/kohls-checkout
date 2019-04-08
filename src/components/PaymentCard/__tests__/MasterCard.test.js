import React from 'react';
import { create } from 'react-test-renderer';

import MasterCard from '../MasterCard';

describe('COMPONENT - MasterCard', () => {
  it('renders MasterCard component', () => {
    const component = create(<MasterCard />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders small MasterCard component', () => {
    const component = create(<MasterCard small />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
