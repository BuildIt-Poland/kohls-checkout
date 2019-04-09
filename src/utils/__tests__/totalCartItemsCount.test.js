import totalCartItemsCount from '../totalCartItemsCount';

describe('FUNC - totalCartItemsCount', () => {
  it('calculates total number of items in cart', () => {
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
      },
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
        quantity: 4
      }
    ];

    expect(totalCartItemsCount(items)).toEqual(7);
  });

  it('calculates total number of items in cart even for single item', () => {
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
        quantity: 2
      }
    ];

    expect(totalCartItemsCount(items)).toEqual(2);
  });
});
