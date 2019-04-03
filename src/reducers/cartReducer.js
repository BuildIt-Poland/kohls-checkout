import { UPDATE_QUANTITY, REMOVE_ITEM } from '../constants/actionTypes';

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

function cartReducer(state = initialState, action) {
  const items = state.items;
  switch (action.type) {
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: items.map((item, index) => {
          if (index !== action.cartItemId) {
            return item;
          }
          return {
            ...item,
            quantity: action.quantity
          };
        })
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.cartItemId)
      };
    default:
      return state;
  }
}

export default cartReducer;
