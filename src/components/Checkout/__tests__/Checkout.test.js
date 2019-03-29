import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Checkout from '../Checkout';

describe('COMPONENT - Checkout', () => {
  it('should render correctly delivery route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/checkout/delivery']} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly payment route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/checkout/payment']} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly review route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['/checkout/review']} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
