import React from 'react';
import { create } from 'react-test-renderer';

import Tick from '../Tick';

describe('COMPONENT - Tick', () => {
  it('renders Tick component', () => {
    const component = create(<Tick />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
