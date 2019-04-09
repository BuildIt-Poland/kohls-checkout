import React from 'react';
import { create } from 'react-test-renderer';

import Cart from '../Cart';

jest.mock('../../Item', () => 'Item');
jest.mock('../../OrderSummary', () => 'OrderSummary');
jest.mock('../../InfoBanner', () => 'InfoBanner');
jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../ShoppingCart', () => 'ShoppingCart');

describe('COMPONENT - Cart', () => {
  it('renders Cart component', () => {
    const component = create(<Cart />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
