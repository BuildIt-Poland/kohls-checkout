import React from 'react';
import { create } from 'react-test-renderer';

import Count from '../Count';

describe('COMPONENT - CartIcon Count', () => {
  it('renders correctly', () => {
    const component = create(<Count />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
