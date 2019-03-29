import React from 'react';
import { create } from 'react-test-renderer';

import PriceBox from '../PriceBox';

describe('COMPONENT - PriceBox', () => {
  it('renders PriceBox component', () => {
    const component = create(<PriceBox />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
