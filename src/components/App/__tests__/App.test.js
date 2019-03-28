import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('COMPONENT - App', () => {
  it('should render correctly main route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly cart route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/cart']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly checkout route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/checkout']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
