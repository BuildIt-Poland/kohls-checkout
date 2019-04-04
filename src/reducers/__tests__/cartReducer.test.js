import reducer from '../cartReducer';
import * as types from '../../constants/actionTypes';

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

describe('cart reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles action INCREASE_QUANTITY', () => {
    const action = {
      type: types.INCREASE_QUANTITY,
      cartItemId: 'EOK3293KSD'
    };

    const expectedState = {
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
          quantity: 2
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

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('handles action DECREASE_QUANTITY', () => {
    const action = {
      type: types.DECREASE_QUANTITY,
      cartItemId: 'EOK3293KSD'
    };

    const expectedState = {
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
          quantity: 0
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

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('handles action SET_QUANTITY', () => {
    const action = {
      type: types.SET_QUANTITY,
      cartItemId: 'EOK3293KSD',
      quantity: 10
    };

    const expectedState = {
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
          quantity: 10
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

    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('handles action REMOVE_ITEM', () => {
    const action = {
      type: types.REMOVE_ITEM,
      cartItemId: 'EOK3293KSD'
    };

    const expectedState = {
      items: [
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

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
