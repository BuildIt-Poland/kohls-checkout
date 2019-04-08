import React from 'react';
import { create } from 'react-test-renderer';

import Button from '../Button';

describe('COMPONENT - Item Page', () => {
  it('renders correctly', () => {
    const component = create(<Button />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
