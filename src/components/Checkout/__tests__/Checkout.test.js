import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Checkout from '../Checkout';
import { CHECKOUT_REVIEW, CHECKOUT_PAYMENT, CHECKOUT_DELIVERY } from '../../../constants/routes';

describe('COMPONENT - Checkout', () => {
  it('should render correctly delivery route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[CHECKOUT_DELIVERY]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly payment route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[CHECKOUT_PAYMENT]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render correctly review route', () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[CHECKOUT_REVIEW]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
