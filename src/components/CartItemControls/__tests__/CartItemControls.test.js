import React from 'react';
import { render } from 'react-testing-library';

import CartItemControls from '../CartItemControls';

describe('COMPONENT - CartItemControls', () => {
  it('renders correctly', () => {
    const props = {
      id: 'test-id-123',
      quantity: 1,
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
      removeItem: jest.fn()
    };

    const { getByTestId } = render(<CartItemControls {...props} />);

    expect(getByTestId('increase-quantity-button')).toBeDefined();
    expect(getByTestId('decrease-quantity-button')).toBeDefined();
    expect(getByTestId('remove-product-button')).toHaveTextContent('Remove');
  });
});
