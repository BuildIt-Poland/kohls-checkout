import React from 'react';
import { render } from 'react-testing-library';

import Item from '../Item';

describe('COMPONENT - Item', () => {
  it('renders correctly', () => {
    const item = {
      id: '64a673c2-59e3-11e9-8647-d663bd873d93',
      name: 'RIDER JACKET - jeans jacket - dark blue',
      imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/LE/42/2T/01/0K/11/LE422T010-K11@8.1.jpg',
      variants: {
        size: '46 Medium',
        color: 'Dark Blue'
      },
      price: {
        regular: 24000,
        discount: 12500
      },
      quantity: 1
    };

    const { container, getByTestId } = render(<Item item={item} />);

    expect(container.querySelector('h3')).toHaveTextContent('RIDER JACKET - jeans jacket - dark blue');
    expect(getByTestId('total-price')).toHaveTextContent('Total: $125.00');
  });
});
