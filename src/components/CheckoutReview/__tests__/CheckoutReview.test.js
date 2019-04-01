import React from 'react';
import { create } from 'react-test-renderer';

import CheckoutReview from '../CheckoutReview';

jest.mock('../../OrderSummary', () => 'OrderSummary');
jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - CheckoutReview', () => {
  it('render CheckoutReview component', () => {
    const component = create(<CheckoutReview />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
