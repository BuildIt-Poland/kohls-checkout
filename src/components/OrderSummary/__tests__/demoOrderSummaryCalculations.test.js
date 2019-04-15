import { subtotalPrice, totalPrice, superDiscountAmount, taxAmount } from '../demoOrderSummaryCalculations';

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

describe('FUNC - superDiscountAmount', () => {
  it('calculates correct discount amount', () => {
    expect(superDiscountAmount(15, 12000)).toEqual(1800);
  });
});

describe('FUNC - taxAmount', () => {
  it('calculates correct tax amount', () => {
    expect(taxAmount(8, 19900)).toEqual(1592);
  });
});
