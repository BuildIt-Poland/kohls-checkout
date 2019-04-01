import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import CartIcon from '../CartIcon';

jest.mock('../../Icons', () => ({
  Cart: 'SimpleCartIcon'
}));

describe('COMPONENT - CartIcon', () => {
  it('renders correctly', () => {
    const component = create(
      <MemoryRouter initialEntries={['/cart']} initialIndex={1}>
        <CartIcon count={4} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
