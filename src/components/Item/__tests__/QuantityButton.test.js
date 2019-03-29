import React from 'react';
import { create } from 'react-test-renderer';

import QuantityButton from '../QuantityButton';

describe('COMPONENT - QuantityButton', () => {
  it('renders QuantityButton component', () => {
    const component = create(<QuantityButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
