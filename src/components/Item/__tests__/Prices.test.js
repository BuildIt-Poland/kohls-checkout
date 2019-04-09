import React from 'react';
import { create } from 'react-test-renderer';

import Prices, { totalPrice } from '../Prices';

describe('COMPONENT - Item Prices', () => {
  it('renders correctly', () => {
    const props = {
      price: {
        regular: 2100,
        discount: 1100
      },
      quantity: 2
    };

    const component = create(<Prices {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly withregular price only without discount', () => {
    const props = {
      price: {
        regular: 2100
      },
      quantity: 2
    };

    const component = create(<Prices {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('FUNC - totalPrice', () => {
  it('returns correct total price when discount is NOT specified', () => {
    expect(totalPrice(2, 2000)).toEqual(4000);
  });

  it('returns correct total price when discount is specified', () => {
    expect(totalPrice(2, 2000, 1200)).toEqual(2400);
  });
});
