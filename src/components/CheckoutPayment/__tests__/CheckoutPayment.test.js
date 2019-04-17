import React from 'react';
import { create } from 'react-test-renderer';

import CheckoutPayment from '../CheckoutPayment';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../SectionHeader', () => 'SectionHeader');
jest.mock('../../OrderSummary', () => 'OrderSummary');
jest.mock('../../NextStep', () => 'NextStep');
jest.mock('../Form', () => 'Form');
jest.mock('../../Headline', () => 'Headline');
jest.mock('../../Page', () => 'Page');

describe('COMPONENT - CheckoutPayment', () => {
  it('renders CheckoutPayment component', () => {
    const component = create(<CheckoutPayment />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
