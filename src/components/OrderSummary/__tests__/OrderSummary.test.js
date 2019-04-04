import React from 'react';
import { render } from 'react-testing-library';

import OrderSummary from '../OrderSummary';

describe('COMPONENT - OrderSummary', () => {
  it('renders correctly with corrrect headline', () => {
    const { container } = render(<OrderSummary />);

    expect(container.querySelector('h2')).toHaveTextContent('Order Summary');
  });
});
