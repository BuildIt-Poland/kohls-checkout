import React from 'react';
import { create } from 'react-test-renderer';

import Layout from '../Layout';

describe('COMPONENT - Item Layout', () => {
  it('renders correctly', () => {
    const component = create(<Layout />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
