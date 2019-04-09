import React from 'react';
import { create } from 'react-test-renderer';

import PaymentCard from '../PaymentCard';

jest.mock('../../Icons', () => ({
  MasterCard: 'MasterCardIcon',
  VisaCard: 'VisaCardIcon',
  AmexCard: 'MasterCardIcon'
}));

describe('COMPONENT - PaymentCard', () => {
  it('renders PaymentCard component for incorrect card number', () => {
    const component = create(<PaymentCard cardNumber="9887786" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders PaymentCard component for MasterCard', () => {
    const component = create(<PaymentCard cardNumber="5338876271187903" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders PaymentCard component for American Express', () => {
    const component = create(<PaymentCard cardNumber="349061596855405" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders PaymentCard component for Visa', () => {
    const component = create(<PaymentCard cardNumber="4485448764804164" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
