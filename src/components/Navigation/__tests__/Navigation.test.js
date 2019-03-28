import React from 'react';
import { create } from 'react-test-renderer';

import Navigation from '../Navigation';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

const render = props => create(<Navigation {...props} />);

describe('COMPONENT - Navigation', () => {
  it('renders Navigation component with "Delivery" tab set as Active', () => {
    const component = render({
      match: {
        params: {
          checkoutStep: 'delivery'
        }
      }
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders Navigation component with "Payment" tab set as Active', () => {
    const component = render({
      match: {
        params: {
          checkoutStep: 'payment'
        }
      }
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders Navigation component with "Review" tab set as Active', () => {
    const component = render({
      match: {
        params: {
          checkoutStep: 'review'
        }
      }
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});
