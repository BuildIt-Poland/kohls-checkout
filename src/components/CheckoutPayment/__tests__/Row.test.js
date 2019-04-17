import React from 'react';
import { create } from 'react-test-renderer';

import Row from '../Row';

describe('COMPONENT - CheckoutPayment Row', () => {
  it('renders correctly', () => {
    const component = create(<Row />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
