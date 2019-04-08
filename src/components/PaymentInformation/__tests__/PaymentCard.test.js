import React from 'react';
import { create } from 'react-test-renderer';

import PaymentCard from '../PaymentCard';

describe('COMPONENT - PaymentCard', () => {
  it('renders PaymentCard component', () => {
    const component = create(<PaymentCard cardNumber="5338876271187903" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
