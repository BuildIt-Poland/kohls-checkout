import reducer, { initialState } from '../cartReducer';
import {
  CART_SET_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_DECREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM,
  CART_REFILL_DEMO_CART
} from '../../constants/actionTypes';

describe('REDUCER - cart reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('handles action INCREASE_QUANTITY', () => {
    const action = {
      type: CART_INCREASE_ITEM_QUANTITY,
      itemId: '64a673c2-59e3-11e9-8647-d663bd873d93'
    };

    const expectedState = {
      items: [
        {
          id: '64a673c2-59e3-11e9-8647-d663bd873d93',
          name: 'RIDER JACKET - jeans jacket - dark blue',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/LE/42/2T/01/0K/11/LE422T010-K11@8.1.jpg',
          variants: {
            size: '46 Medium',
            color: 'Dark Blue'
          },
          price: {
            regular: 24099,
            discount: 12500
          },
          quantity: 2
        },
        {
          id: '71380d3a-59e3-11e9-8647-d663bd873d93',
          name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
          variants: {
            size: '42 Short',
            color: 'Mint'
          },
          price: {
            regular: 44000
          },
          quantity: 1
        }
      ]
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles action DECREASE_QUANTITY', () => {
    const action = {
      type: CART_DECREASE_ITEM_QUANTITY,
      itemId: '64a673c2-59e3-11e9-8647-d663bd873d93'
    };

    const expectedState = {
      items: [
        {
          id: '64a673c2-59e3-11e9-8647-d663bd873d93',
          name: 'RIDER JACKET - jeans jacket - dark blue',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/LE/42/2T/01/0K/11/LE422T010-K11@8.1.jpg',
          variants: {
            size: '46 Medium',
            color: 'Dark Blue'
          },
          price: {
            regular: 24099,
            discount: 12500
          },
          quantity: 0
        },
        {
          id: '71380d3a-59e3-11e9-8647-d663bd873d93',
          name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
          variants: {
            size: '42 Short',
            color: 'Mint'
          },
          price: {
            regular: 44000
          },
          quantity: 1
        }
      ]
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles action SET_QUANTITY', () => {
    const action = {
      type: CART_SET_ITEM_QUANTITY,
      itemId: '64a673c2-59e3-11e9-8647-d663bd873d93',
      quantity: 10
    };

    const expectedState = {
      items: [
        {
          id: '64a673c2-59e3-11e9-8647-d663bd873d93',
          name: 'RIDER JACKET - jeans jacket - dark blue',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/LE/42/2T/01/0K/11/LE422T010-K11@8.1.jpg',
          variants: {
            size: '46 Medium',
            color: 'Dark Blue'
          },
          price: {
            regular: 24099,
            discount: 12500
          },
          quantity: 10
        },
        {
          id: '71380d3a-59e3-11e9-8647-d663bd873d93',
          name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
          variants: {
            size: '42 Short',
            color: 'Mint'
          },
          price: {
            regular: 44000
          },
          quantity: 1
        }
      ]
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles action REMOVE_ITEM', () => {
    const action = {
      type: CART_REMOVE_ITEM,
      itemId: '64a673c2-59e3-11e9-8647-d663bd873d93'
    };

    const expectedState = {
      items: [
        {
          id: '71380d3a-59e3-11e9-8647-d663bd873d93',
          name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
          variants: {
            size: '42 Short',
            color: 'Mint'
          },
          price: {
            regular: 44000
          },
          quantity: 1
        }
      ]
    };

    Object.freeze(initialState);
    Object.freeze(action);

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('handles action CART_REFILL_DEMO_CART', () => {
    const action = {
      type: CART_REFILL_DEMO_CART
    };

    const currentState = {
      items: [
        {
          id: '71380d3a-59e3-11e9-8647-d663bd873d93',
          name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
          imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
          variants: {
            size: '42 Short',
            color: 'Mint'
          },
          price: {
            regular: 44000
          },
          quantity: 4
        }
      ]
    };

    Object.freeze(currentState);
    Object.freeze(action);

    expect(reducer(currentState, action)).toEqual(initialState);
  });
});
