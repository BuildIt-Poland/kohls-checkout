import React from 'react';
import { create } from 'react-test-renderer';

import QuantityInput from '../QuantityInput';

describe('COMPONENT - QuantityInput', () => {
  it('renders QuantityInput component', () => {
    const component = create(<QuantityInput />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
