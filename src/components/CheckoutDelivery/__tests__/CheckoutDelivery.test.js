import React from 'react';
import { create } from 'react-test-renderer';

import CheckoutDelivery from '../CheckoutDelivery';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));
jest.mock('../../SectionHeader', () => 'SectionHeader');
jest.mock('../../NextStep', () => 'NextStep');
jest.mock('../Form', () => 'Form');

describe('COMPONENT - CheckoutDelivery', () => {
  it('renders CheckoutDelivery component', () => {
    const props = {
      history: {
        push: jest.fn(),
        location: {
          pathname: ''
        }
      },
      initialAddress: {
        firstName: 'Taylor',
        lastName: 'Swift',
        street: '228 Park Ave S',
        city: 'New Orleans',
        state: 'NO',
        zipCode: '10003-1502',
        phone: '444 444 444'
      },
      setAddress: jest.fn()
    };

    const component = create(<CheckoutDelivery {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
