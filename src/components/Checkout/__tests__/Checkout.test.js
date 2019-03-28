import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Checkout from '../Checkout';
import { CHECKOUT_REVIEW, CHECKOUT_PAYMENT, CHECKOUT_DELIVERY } from '../../../constants/routes';

describe('COMPONENT - Checkout', () => {
  it('renders correctly for "/delivery" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_DELIVERY]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for "/payment" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_PAYMENT]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for "/review" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_REVIEW]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
