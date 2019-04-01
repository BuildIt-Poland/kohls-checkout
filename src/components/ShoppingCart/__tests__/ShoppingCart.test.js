import React from 'react';
import { create } from 'react-test-renderer';

import ShoppingCart from '../ShoppingCart';

jest.mock('../../ItemsList', () => 'ItemsList');
jest.mock('../../Item', () => 'Item');

describe('COMPONENT - ShoppingCart', () => {
  it('renders ShoppingCart component', () => {
    const component = create(<ShoppingCart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
