/* global before cy*/

import fillShippingForm from './utils/fillShippingForm';
import getBtnAndClick from './utils/getBtnAndClick';
import goTo from './utils/goTo';

describe('Navigation', () => {
  it('allows to get back directly to Delivery by Navigation', () => {
    // Goes to the Checkout Delivery Step
    goTo('/checkout/delivery');

    // Goes to the Checkout Review Step
    fillShippingForm();
    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');
    getBtnAndClick('[data-testid="next-step-button"]', 'Review Order');

    // Clicks on Checkout Delivery Nav Button
    getBtnAndClick('[data-testid="navigation-link"]', 'Delivery');

    // Should get back to Checkout Delivery Step
    cy.url().should('include', '/checkout/delivery');
  });

  it('allows to get back step by step to Delivery by Navigation', () => {
    // Goes to the Checkout Delivery Step
    goTo('/checkout/delivery');

    // Goes to the Checkout Review Step
    fillShippingForm();
    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');
    getBtnAndClick('[data-testid="next-step-button"]', 'Review Order');

    // Clicks on Checkout Payment Nav Button
    getBtnAndClick('[data-testid="navigation-link"]', 'Payment');

    // Should get back to Checkout Payment Step
    cy.url().should('include', '/checkout/payment');

    // Clicks on Checkout Payment Nav Button
    getBtnAndClick('[data-testid="navigation-link"]', 'Delivery');

    // Should get back to Checkout Delivery Step
    cy.url().should('include', '/checkout/delivery');
  });
});
