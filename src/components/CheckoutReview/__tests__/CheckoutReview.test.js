import React from 'react';
import renderer from 'react-test-renderer';

import CheckoutReview from '../CheckoutReview';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - CheckoutReview', () => {
  it('render CheckoutReview component', () => {
    const component = renderer.create(<CheckoutReview />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
