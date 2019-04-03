import React from 'react';
import { create } from 'react-test-renderer';

import Label from '../Label';

describe('COMPONENT - Label', () => {
  it('renders Label component', () => {
    const component = create(<Label />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
