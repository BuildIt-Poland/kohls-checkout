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
    getBtnAndClick('.sc-gZMcBi', 'Continue to Payment');
    getBtnAndClick('.sc-gZMcBi', 'Review Order');
    getBtnAndClick('.sc-gZMcBi', 'Place Order');
  });

  it('goes through all navigation tabs', () => {
    getBtnAndClick('.sc-VigVT', 'Delivery');
    getBtnAndClick('.sc-VigVT', 'Payment');
    getBtnAndClick('.sc-VigVT', 'Review');
    getBtnAndClick('.sc-gZMcBi', 'Place Order');
  });
});
