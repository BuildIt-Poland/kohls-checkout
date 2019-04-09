import React from 'react';
import { create } from 'react-test-renderer';

import PaymentMethod from '../PaymentMethod';

jest.mock('../../PaymentCard', () => 'PaymentCard');

describe('COMPONENT - PaymentMethod', () => {
  it('renders PaymentMethod component', () => {
    const component = create(<PaymentMethod cardNumber="5555555555554444" expiries="04/21" price={220.5} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
