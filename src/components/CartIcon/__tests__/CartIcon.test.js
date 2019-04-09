import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import CartIcon from '../CartIcon';

jest.mock('../../Icons', () => ({
  Cart: 'SimpleCartIcon'
}));

describe('COMPONENT - CartIcon', () => {
  const items = [
    {
      id: '71380d3a-59e3-11e9-8647-d663bd873d93',
      name: 'WOMAN JACKET FIX HOOD - outdoor - mint',
      imgUrl: 'https://mosaic03.ztat.net/vgs/media/catalog_hd/C7/04/1F/06/LL/11/C7041F06L-L11@9.jpg',
      variants: {
        size: '42 Short',
        color: 'Mint'
      },
      price: {
        regular: 44000
      },
      quantity: 3
    }
  ];

  it('renders correctly', () => {
    const component = create(
      <MemoryRouter initialEntries={['/cart']} initialIndex={1}>
        <CartIcon items={items} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
