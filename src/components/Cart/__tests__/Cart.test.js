import React from 'react';
import { create } from 'react-test-renderer';

import Cart from '../Cart';

jest.mock('../../ItemsList', () => 'ItemsList');
jest.mock('../../OrderSummary', () => 'OrderSummary');
jest.mock('../../InfoBanner', () => 'InfoBanner');
jest.mock('../../NextStep', () => 'NextStep');
jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - Cart', () => {
  it('renders correctly if there are some items in cart', () => {
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

    const component = create(<Cart items={items} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if there are NO items in cart', () => {
    const component = create(<Cart items={[]} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
