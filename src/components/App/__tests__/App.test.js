import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { CART_PATH, CHECKOUT_PATH } from '../../../constants/routes';
import App from '../App';

jest.mock('../../ShoppingCart', () => 'ShoppingCart');
jest.mock('../../OrderSummary', () => 'OrderSummary');

describe('COMPONENT - App', () => {
  it('renders correctly default route', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly "/cart" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CART_PATH]} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly "/checkout" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_PATH]} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
