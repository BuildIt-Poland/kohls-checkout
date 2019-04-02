import React from 'react';
import { create } from 'react-test-renderer';

import PriceRow from '../PriceRow';

describe('COMPONENT - OrderSummary PriceRow', () => {
  it('render NextStep component', () => {
    const component = create(<PriceRow />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
