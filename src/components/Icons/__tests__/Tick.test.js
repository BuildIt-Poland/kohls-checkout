import React from 'react';
import { create } from 'react-test-renderer';

import Tick from '../Tick';

describe('COMPONENT - Icons Tick', () => {
  it('renders correctly', () => {
    const component = create(<Tick />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
