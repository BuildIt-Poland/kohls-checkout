/* global cy*/
import goTo from "./utils/goTo";
describe('Title', () => {
  it(`set text on the tab to 'The store' for landing page`, () => {
    goTo('/');

    cy.title().should('eq', 'The Store');
  });

  it(`set text on the tab to 'The store | Cart (2)' for cart page`, () => {
    goTo('/cart');

    cy.title().should('eq', 'The Store | Cart (2)');
  });

  it(`set text on the tab to'The store | Delivery' for delivery page`, () => {
    goTo('/checkout/delivery');

    cy.title().should('eq', 'The Store | Delivery');
  });

  it(`set text on the tab to 'The store | Payment' for payment page`, () => {
    goTo('/checkout/payment');

    cy.title().should('eq', 'The Store | Payment');
  });

  it(`set text on the tab to 'The store | Review' for review page`, () => {
    goTo('/checkout/review');

    cy.title().should('eq', 'The Store | Review');
  });
});
