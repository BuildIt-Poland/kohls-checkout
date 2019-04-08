import React from 'react';
import { render } from 'react-testing-library';

import QuantityInput from '../QuantityInput';

describe('COMPONENT - QuantityInput', () => {
  it('decrease quantity button should be disabled if quantity equals 1', () => {
    const props = {
      quantity: 1,
      decreaseQuantity: jest.fn(),
      increaseQuantity: jest.fn()
    };
    const { getByTestId } = render(<QuantityInput {...props} />);
    expect(getByTestId('decrease-quantity-button')).toHaveAttribute('disabled');
  });
});
