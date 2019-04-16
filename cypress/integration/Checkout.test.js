/* global cy*/

import fillFormInput from './utils/fillFormInput';
import fillShippingForm from './utils/fillShippingForm';
import getBtnAndClick from './utils/getBtnAndClick';
import goTo from './utils/goTo';

describe('Checkout', () => {
  it('stays in delivery step when form is empty', () => {
    // Goes to the Checkout Delivery Step
    goTo('/checkout/delivery');

    // Tries to proceed to the next step with empty form
    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');

    // Should stay on Checkout Delivery step due to validation fail
    cy.url().should('include', '/checkout/delivery');
  });

  it('stays in delivery step when form is invalid', () => {
    // Goes to the Checkout Delivery Step
    goTo('/checkout/delivery');

    // Fills Shipping form correctly
    fillShippingForm();

    // Sets state input incorectly
    fillFormInput('state', 'Incorrect state');

    // Tries to proceed to the next step with invalid form
    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');

    // Should stay on Checkout Delivery step due to validation fail
    cy.url().should('include', '/checkout/delivery');
  });

  it('goes to payment step when form is filled correctly', () => {
    // Goes to the Checkout Delivery Step
    goTo('/checkout/delivery');

    // Fills Shipping form correctly
    fillShippingForm();

    // Tries to proceed to the next step with invalid form
    getBtnAndClick('[data-testid="next-step-button"]', 'Continue to Payment');

    // Should redirect to the Checkout Payment step
    cy.url().should('include', '/checkout/payment');
  });
});
