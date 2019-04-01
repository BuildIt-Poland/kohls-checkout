import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Logo from '../Logo';

jest.mock('../../Icons', () => ({
  Logo: 'LogoIcon'
}));

describe('COMPONENT - Header Logo', () => {
  it('renders correctly', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Logo />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
