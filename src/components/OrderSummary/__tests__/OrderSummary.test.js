import React from 'react';
import { render, cleanup } from 'react-testing-library';

import OrderSummary from '../OrderSummary';

afterEach(cleanup);

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
