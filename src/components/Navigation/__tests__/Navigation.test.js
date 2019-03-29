import React from 'react';
import { create } from 'react-test-renderer';

import Navigation from '../Navigation';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - Navigation', () => {
  it('renders Navigation component with "Delivery" tab set as Active', () => {
    const match = {
      params: {
        checkoutStep: 'delivery'
      }
    };

    const component = create(<Navigation match={match} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders Navigation component with "Payment" tab set as Active', () => {
    const match = {
      params: {
        checkoutStep: 'payment'
      }
    };

    const component = create(<Navigation match={match} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders Navigation component with "Review" tab set as Active', () => {
    const match = {
      params: {
        checkoutStep: 'review'
      }
    };

    const component = create(<Navigation match={match} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
