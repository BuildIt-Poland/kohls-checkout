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

function cartReducer(state = initialState, action) {
  const items = state.items;
  switch (action.type) {
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: items.map(item => {
          if (item.id !== action.cartItemId) {
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
        items: state.items.filter(item => item.id !== action.cartItemId)
      };
    default:
      return state;
  }
}

export default cartReducer;
