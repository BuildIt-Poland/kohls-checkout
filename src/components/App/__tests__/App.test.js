import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { CART_PATH, CHECKOUT_PATH } from '../../../constants/routes';
import App from '../App';

describe('COMPONENT - App', () => {
  it('renders correctly default route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly "/cart" route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[CART_PATH]} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly "/checkout" route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[CHECKOUT_PATH]} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
