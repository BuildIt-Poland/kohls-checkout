import * as actions from '../cartActions';
import * as types from '../../constants/actionTypes';

describe('cart actions', () => {
  it('creates an action to update quantity', () => {
    const cartItemId = 'EOK3293KSD';
    const quantity = 1;
    const expectedAction = {
      type: types.SET_QUANTITY,
      cartItemId,
      quantity
    };

    expect(actions.updateQuantity(cartItemId, quantity)).toEqual(expectedAction);
  });

  it('creates an action to increase quantity', () => {
    const cartItemId = 'EOK3293KSD';
    const expectedAction = {
      type: types.INCREASE_QUANTITY,
      cartItemId
    };

    expect(actions.increaseQuantity(cartItemId)).toEqual(expectedAction);
  });

  it('creates an action to decrease quantity', () => {
    const cartItemId = 'EOK3293KSD';
    const expectedAction = {
      type: types.DECREASE_QUANTITY,
      cartItemId
    };

    expect(actions.decreaseQuantity(cartItemId)).toEqual(expectedAction);
  });

  it('creates an action to remove item', () => {
    const cartItemId = 'EOK3293KSD';
    const expectedAction = {
      type: types.REMOVE_ITEM,
      cartItemId
    };

    expect(actions.removeItem(cartItemId)).toEqual(expectedAction);
  });
});
