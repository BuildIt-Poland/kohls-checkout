import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';

import { CHECKOUT_REVIEW_PATH, CHECKOUT_PAYMENT_PATH, CHECKOUT_DELIVERY_PATH } from '../../../constants/routes';
import Checkout from '../Checkout';

describe('COMPONENT - Checkout', () => {
  it('renders correctly for "/delivery" route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[CHECKOUT_DELIVERY_PATH]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent('Delivery');
  });

  it('renders correctly for "/payment" route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[CHECKOUT_PAYMENT_PATH]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent('Payment');
  });

  it('renders correctly for "/review" route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={[CHECKOUT_REVIEW_PATH]} initialIndex={1}>
        <Checkout />
      </MemoryRouter>
    );

    expect(container.querySelector('h1')).toHaveTextContent('Review');
  });
});
