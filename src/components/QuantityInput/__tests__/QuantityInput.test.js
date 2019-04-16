import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import QuantityInput from '../QuantityInput';

afterEach(cleanup);

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

  it('fire decreaseQuantity handler', () => {
    const decreaseQuantity = jest.fn();
    const { getByTestId } = render(
      <QuantityInput quantity={10} decreaseQuantity={decreaseQuantity} increaseQuantity={jest.fn()} />
    );

    fireEvent.click(getByTestId('decrease-quantity-button'));
    expect(decreaseQuantity).toHaveBeenCalledTimes(1);
  });

  it('fire increaseQuantity handler', () => {
    const increaseQuantity = jest.fn();
    const { getByTestId } = render(
      <QuantityInput quantity={10} increaseQuantity={increaseQuantity} decreaseQuantity={jest.fn()} />
    );

    fireEvent.click(getByTestId('increase-quantity-button'));
    expect(increaseQuantity).toHaveBeenCalledTimes(1);
  });
});
