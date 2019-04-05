import { updateQuantity, increaseQuantity, decreaseQuantity, removeItem } from '../cartActions';
import { SET_QUANTITY, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from '../../constants/actionTypes';

describe('cart actions', () => {
  it('creates an action to update quantity', () => {
    const cartItemId = 'EOK3293KSD';
    const quantity = 1;
    const expectedAction = {
      type: SET_QUANTITY,
      cartItemId,
      quantity
    };

    expect(updateQuantity(cartItemId, quantity)).toEqual(expectedAction);
  });

  it('creates an action to increase quantity', () => {
    const cartItemId = 'EOK3293KSD';
    const expectedAction = {
      type: INCREASE_QUANTITY,
      cartItemId
    };

    expect(increaseQuantity(cartItemId)).toEqual(expectedAction);
  });

  it('creates an action to decrease quantity', () => {
    const cartItemId = 'EOK3293KSD';
    const expectedAction = {
      type: DECREASE_QUANTITY,
      cartItemId
    };

    expect(decreaseQuantity(cartItemId)).toEqual(expectedAction);
  });

  it('creates an action to remove item', () => {
    const cartItemId = 'EOK3293KSD';
    const expectedAction = {
      type: REMOVE_ITEM,
      cartItemId
    };

    expect(removeItem(cartItemId)).toEqual(expectedAction);
  });
});
