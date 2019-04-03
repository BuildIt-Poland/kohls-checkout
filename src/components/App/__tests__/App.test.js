/* global renderWithRedux */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CART_PATH } from '../../../constants/routes';
import App from '../App';

describe('COMPONENT - App', () => {
  it('renders correctly default route, which should contain correct headline', () => {
    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(container.querySelectorAll('h1')[0]).toHaveTextContent('Project goals');
  });

  it('renders correctly "/cart" route', () => {
    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={[CART_PATH]} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent('Cart');
  });
});
