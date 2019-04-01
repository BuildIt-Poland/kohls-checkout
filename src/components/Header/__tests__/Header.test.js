import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

describe('COMPONENT - Header', () => {
  it('contains logo with a link to main page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/cart']} initialIndex={1}>
        <Header />
      </MemoryRouter>
    );

    expect(container.querySelector('a')).toHaveAttribute('href', '/');
  });
});
