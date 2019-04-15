/* global renderWithRedux */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { CHECKOUT_PAYMENT_PATH } from '../../../constants/routes';
import PaymentInformation from '../PaymentInformation';

describe('COMPONENT - PaymentInformation', () => {
  it('renders PaymentInformation component', () => {
    const { container } = renderWithRedux(
      <MemoryRouter initialEntries={[CHECKOUT_PAYMENT_PATH]} initialIndex={1}>
        <PaymentInformation />
      </MemoryRouter>
    );

    expect(container.querySelector('h2')).toHaveTextContent('Payment Information');
  });
});
