import React from 'react';
import { create } from 'react-test-renderer';

import Amex from '../Amex';

describe('COMPONENT - Amex', () => {
  it('renders Amex component', () => {
    const component = create(<Amex />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders small Amex component', () => {
    const component = create(<Amex small />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
