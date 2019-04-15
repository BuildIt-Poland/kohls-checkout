/* global cy*/

describe('Title', () => {
  it(`set text on the tab to 'The store' for landing page`, () => {
    cy.visit('/');

    cy.title().should('eq', 'The Store');
  });

  it(`set text on the tab to 'The store | Cart (2)' for cart page`, () => {
    cy.visit('/cart');

    cy.title().should('eq', 'The Store | Cart (2)');
  });

  it(`set text on the tab to'The store | Delivery' for delivery page`, () => {
    cy.visit('/checkout/delivery');

    cy.title().should('eq', 'The Store | Delivery');
  });

  it(`set text on the tab to 'The store | Payment' for payment page`, () => {
    cy.visit('/checkout/payment');

    cy.title().should('eq', 'The Store | Payment');
  });

  it(`set text on the tab to 'The store | Review' for review page`, () => {
    cy.visit('/checkout/review');

    cy.title().should('eq', 'The Store | Review');
  });
});
