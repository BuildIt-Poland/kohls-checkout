import React from 'react';
import { create } from 'react-test-renderer';

import Address from '../Address';

describe('COMPONENT - Address', () => {
  it('renders Address component', () => {
    const component = create(<Address />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
