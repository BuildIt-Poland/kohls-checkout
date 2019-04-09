import {
  CART_SET_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_DECREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM
} from '../constants/actionTypes';

const initialState = {
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
      quantity: 1
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
      quantity: 2
    }
  ]
};

const getItemQuantity = function(array, itemId) {
  const item = array.find(item => item.id === itemId);
  return item ? item.quantity : null;
};

const updateItemQuantity = function(array, itemId, quantity) {
  return array.map(item => {
    if (item.id !== itemId) {
      return item;
    }
    return {
      ...item,
      quantity
    };
  });
};

function cartReducer(state = initialState, action) {
  const { items } = state;
  const { itemId } = action;
  const currentQuantity = getItemQuantity(items, itemId);
  switch (action.type) {
    case CART_INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, itemId, currentQuantity + 1)
      };
    case CART_DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, itemId, currentQuantity - 1)
      };
    case CART_SET_ITEM_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, itemId, action.quantity)
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        items: items.filter(item => item.id !== itemId)
      };
    default:
      return state;
  }
}

export default cartReducer;
