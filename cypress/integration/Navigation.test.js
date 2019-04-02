const getBtnAndClick = (selector, content) =>
  cy
    .get(selector)
    .contains(content)
    .click();

describe('Navigation.test.js', () => {
  beforeEach(() => {
    cy.visit('/checkout/delivery');
  });

  it('goes through all steps by one button', () => {
    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');
    getBtnAndClick('[data-testid="next-step-button"]', 'Review Order');
    getBtnAndClick('[data-testid="next-step-button"]', 'Place Order');
  });

  it('goes through all navigation tabs', () => {
    getBtnAndClick('[data-testid="navigation-link"]', 'Delivery');
    getBtnAndClick('[data-testid="navigation-link"]', 'Payment');
    getBtnAndClick('[data-testid="navigation-link"]', 'Review');
    getBtnAndClick('[data-testid="next-step-button"]', 'Place Order');
  });
});
