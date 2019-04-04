import React from 'react';
import { create } from 'react-test-renderer';

import Header from '../Header';

describe('COMPONENT - Modal Header', () => {
  it('renders correctly', () => {
    const component = create(<Header />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
