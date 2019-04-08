import React from 'react';
import { create } from 'react-test-renderer';

import PaymentMethod from '../PaymentMethod';

describe('COMPONENT - PaymentMethod', () => {
  it('renders PaymentMethod component', () => {
    const component = create(<PaymentMethod cardNumber="4532888003415095" expiries="04/21" price={220.5} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
