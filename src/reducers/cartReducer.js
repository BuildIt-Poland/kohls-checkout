import { SET_QUANTITY, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/actionTypes';

const initialState = {
  items: [
    {
      id: 'EOK3293KSD',
      name: "Men's Chaps Performance Series Classic-Fit 4-Way Strech Sit Jacket",
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71ZgPluVoTL._UX385_.jpg',
      variants: {
        size: '42 SHORT',
        color: 'Charcoal'
      },
      price: {
        regular: 240,
        discount: 125
      },
      quantity: 1
    },
    {
      id: 'EOK32943983',
      name: "WoMen's Chaps Performance Series Classic-Fit 4-Way Strech Sit Jacket",
      imgUrl: 'https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/6/_103433446.jpg',
      variants: {
        size: '42 SHORT',
        color: 'Charcoal'
      },
      price: {
        regular: 440,
        discount: 140
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
      quantity: quantity
    };
  });
};

function cartReducer(state = initialState, action) {
  const currentQuantity = getItemQuantity(state.items, action.cartItemId);
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(state.items, action.cartItemId, currentQuantity + 1)
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(state.items, action.cartItemId, currentQuantity - 1)
      };
    case SET_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(state.items, action.cartItemId, action.quantity)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.cartItemId)
      };
    default:
      return state;
  }
}

export default cartReducer;
