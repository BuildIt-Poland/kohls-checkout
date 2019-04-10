import React from 'react';
import { create } from 'react-test-renderer';

import Input from '../Input';

describe('COMPONENT - FormInput Input', () => {
  it('renders correctly', () => {
    const component = create(<Input />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
