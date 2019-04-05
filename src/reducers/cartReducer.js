import { SET_QUANTITY, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/actionTypes';

const initialState = {
  items: [
    {
      id: 'EOK3293KSD',
      name: 'RIDER JACKET - jeans jacket - dark blue',
      imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/LE/42/2T/01/0K/11/LE422T010-K11@8.1.jpg',
      variants: {
        size: '42 SHORT',
        color: 'Dark Blue'
      },
      price: {
        regular: 24000,
        discount: 12500
      },
      quantity: 1
    },
    {
      id: 'EOK32943983',
      name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
      imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
      variants: {
        size: '42 SHORT',
        color: 'Mint'
      },
      price: {
        regular: 44000,
        discount: 14000
      },
      quantity: 1
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
  const { cartItemId } = action;
  const currentQuantity = getItemQuantity(items, cartItemId);
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, cartItemId, currentQuantity + 1)
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, cartItemId, currentQuantity - 1)
      };
    case SET_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, cartItemId, action.quantity)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: items.filter(item => item.id !== cartItemId)
      };
    default:
      return state;
  }
}

export default cartReducer;
