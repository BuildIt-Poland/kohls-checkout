import React from 'react';
import { render } from 'react-testing-library';

import OrderSummary, { subtotalPrice, totalPrice } from '../OrderSummary';

describe('COMPONENT - OrderSummary', () => {
  it('renders correctly with corrrect headline', () => {
    const items = [
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
        quantity: 3
      }
    ];

    const { container } = render(<OrderSummary items={items} />);

    expect(container.querySelector('h2')).toHaveTextContent('Order Summary');
  });
});

describe('FUNC - subtotalPrice', () => {
  it('calculates correct subtotal price for items without discounts', () => {
    // Just leaving relevent fields
    const items = [
      {
        price: {
          regular: 2200
        },
        quantity: 3
      },
      {
        price: {
          regular: 1199
        },
        quantity: 2
      },
      {
        price: {
          regular: 4400
        },
        quantity: 1
      }
    ];

    expect(subtotalPrice(items)).toEqual(13398);
  });

  it('calculates correct subtotal price for items only with discounts', () => {
    const items = [
      {
        price: {
          regular: 2200,
          discount: 1100
        },
        quantity: 3
      },
      {
        price: {
          regular: 1199,
          discount: 998
        },
        quantity: 2
      },
      {
        price: {
          regular: 4400,
          discount: 3800
        },
        quantity: 1
      }
    ];

    expect(subtotalPrice(items)).toEqual(9096);
  });

  it('calculates correct subtotal price for items with mixed prices', () => {
    const items = [
      {
        price: {
          regular: 2200
        },
        quantity: 1
      },
      {
        price: {
          regular: 1199,
          discount: 998
        },
        quantity: 3
      },
      {
        price: {
          regular: 4400
        },
        quantity: 2
      }
    ];

    expect(subtotalPrice(items)).toEqual(13994);
  });
});

describe('FUNC - totalPrice', () => {
  it('calculates correct total price', () => {
    expect(totalPrice(1000, 12, 8, 13600)).toEqual(14056);
  });

  it('calculates correct total price if shipping, discount and tax are 0', () => {
    expect(totalPrice(0, 0, 0, 13600)).toEqual(13600);
  });
});
