import { INCREASE_QUANTITY, DECREASE_QUANTITY } from '../constants/actionTypes';

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
    }
  ]
};

const updateItemQuantity = function(array, type, action) {
  return array.map((item, index) => {
    if (index !== action.cartItemId) {
      return item;
    }
    return {
      ...item,
      quantity: type === 'up' ? item.quantity + 1 : item.quantity - 1
    };
  });
};

function cartReducer(state = initialState, action) {
  const items = state.items;
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, 'up', action)
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: updateItemQuantity(items, 'down', action)
      };
    default:
      return state;
  }
}

export default cartReducer;
