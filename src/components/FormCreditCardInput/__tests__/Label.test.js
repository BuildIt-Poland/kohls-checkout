import React from 'react';
import { create } from 'react-test-renderer';

import Label from '../Label';

describe('COMPONENT - FormCreditCardInput Label', () => {
  it('renders correctly', () => {
    const component = create(<Label />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
