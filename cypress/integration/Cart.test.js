/* global cy*/

function firstElement(selector) {
  return cy.get(selector).first();
}

describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/cart');
  })

  it('increase quantity item to two', () => {
    firstElement('[data-testid="increase-quantity-button"]').click();

    firstElement('[data-testid="quantity"]').should('contain', '2');
  });

  it('decrease quantity item to one', () => {
    firstElement('[data-testid="increase-quantity-button"]').click();
    firstElement('[data-testid="decrease-quantity-button"]').click();

    firstElement('[data-testid="quantity"]').should('contain', '1');
  });

  it('remove item from items list', () => {
    firstElement('[data-testid="remove-product-button"]').click();

    cy.get('[data-testid="list-item"]').its('length').should('eq', 1);
  });

  it('display quantity on card icon, which equals one', () => {
    firstElement('[data-testid="remove-product-button"]').click();

    cy.get('[data-testid="cart-icon"] > div').should('contain', '1');
  });
});
