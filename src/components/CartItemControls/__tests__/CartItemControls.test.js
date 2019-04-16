import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import CartItemControls from '../CartItemControls';

afterEach(cleanup);

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

  it('fires removeItem handler', () => {
    const id = 'taylor-swift-1';
    const removeItem = jest.fn();

    const props = {
      id: 'test-id-123',
      quantity: 1,
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn()
    };

    const { getByTestId } = render(<CartItemControls {...props} id={id} removeItem={removeItem} />);

    fireEvent.click(getByTestId('remove-product-button'));

    expect(removeItem).toHaveBeenCalledWith(id);
  });
});
