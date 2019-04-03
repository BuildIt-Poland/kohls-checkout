import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { CHECKOUT_REVIEW_PATH, CHECKOUT_PAYMENT_PATH, CHECKOUT_DELIVERY_PATH } from '../../../constants/routes';
import Checkout from '../Checkout';

describe('COMPONENT - Checkout', () => {
  it('renders correctly for "/delivery" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_DELIVERY_PATH]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for "/payment" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_PAYMENT_PATH]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly for "/review" route', () => {
    const component = create(
      <MemoryRouter initialEntries={[CHECKOUT_REVIEW_PATH]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
