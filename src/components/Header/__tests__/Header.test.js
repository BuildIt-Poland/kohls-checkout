/* global renderWithRedux */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

describe('COMPONENT - Header', () => {
  it('contains logo with a link to main page', () => {
    const { getByTestId } = renderWithRedux(
      <MemoryRouter initialEntries={['/cart']} initialIndex={1}>
        <Header />
      </MemoryRouter>
    );

    expect(getByTestId('logo')).toHaveAttribute('href', '/');
  });

  it('contains cart icon', () => {
    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={['/cart']} initialIndex={1}>
        <Header />
      </MemoryRouter>
    );

    expect(container.querySelector('[data-testid="cart-icon"] title')).toHaveTextContent('Cart');
  });
});
