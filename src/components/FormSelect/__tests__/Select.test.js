import React from 'react';
import { create } from 'react-test-renderer';

import Select from '../Select';

describe('COMPONENT - FormSelect Select', () => {
  it('renders correctly', () => {
    const component = create(<Select />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
