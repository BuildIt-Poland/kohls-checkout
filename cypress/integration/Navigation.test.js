/* global before cy*/

function getBtnAndClick(selector, content) {
  return cy
    .get(selector)
    .contains(content)
    .click();
}

function fillFormInput(name, content) {
  return cy.get(`input[name=${name}]`).type(content);
}

describe('Navigation', () => {
  before(() => {
    cy.visit('/checkout/delivery');
  });

  it('go through delivery step', () => {
    fillFormInput('firstName', 'John');
    fillFormInput('lastName', 'Robinson');

    fillFormInput('street', 'Ocean Avenue');
    fillFormInput('city', 'New York');

    fillFormInput('state', 'NS');
    fillFormInput('zipCode', '07305');

    fillFormInput('phone', '2025550163');

    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');
  });

  it('go through payment step', () => {
    getBtnAndClick('[data-testid="next-step-button"]', 'Review Order');
  });

  it('go through review step', () => {
    getBtnAndClick('[data-testid="next-step-button"]', 'Place Order');
  });

  it('stay in delivery step when form is invalid', () => {
    cy.visit('/checkout/delivery');

    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');

    cy.url().should('include', '/checkout/delivery');
  });
});
