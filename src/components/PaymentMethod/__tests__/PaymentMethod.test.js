import React from 'react';
import { create } from 'react-test-renderer';

import PaymentMethod from '../PaymentMethod';

jest.mock('../../PaymentCard', () => 'PaymentCard');
jest.mock('../../SectionHeader', () => 'SectionHeader');
jest.mock('../CardName', () => 'CardName');

describe('COMPONENT - PaymentMethod', () => {
  it('renders PaymentMethod component', () => {
    const paymentInfo = {
      cardNumber: '5376636801372430',
      expMonth: '09',
      expYear: '23'
    };
    const component = create(<PaymentMethod paymentInfo={paymentInfo} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
