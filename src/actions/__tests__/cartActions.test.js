import { setItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem } from '../cartActions';
import {
  CART_SET_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_DECREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM
} from '../../constants/actionTypes';

describe('ACTIONS - Cart actions', () => {
  it('creates an action to update quantity', () => {
    const itemId = 'EOK3293KSD';
    const quantity = 1;
    const expectedAction = {
      type: CART_SET_ITEM_QUANTITY,
      itemId,
      quantity
    };

    expect(setItemQuantity(itemId, quantity)).toEqual(expectedAction);
  });

  it('creates an action to increase quantity', () => {
    const itemId = 'EOK3293KSD';
    const expectedAction = {
      type: CART_INCREASE_ITEM_QUANTITY,
      itemId
    };

    expect(increaseItemQuantity(itemId)).toEqual(expectedAction);
  });

  it('creates an action to decrease quantity', () => {
    const itemId = 'EOK3293KSD';
    const expectedAction = {
      type: CART_DECREASE_ITEM_QUANTITY,
      itemId
    };

    expect(decreaseItemQuantity(itemId)).toEqual(expectedAction);
  });

  it('creates an action to remove item', () => {
    const itemId = 'EOK3293KSD';
    const expectedAction = {
      type: CART_REMOVE_ITEM,
      itemId
    };

    expect(removeItem(itemId)).toEqual(expectedAction);
  });
});
