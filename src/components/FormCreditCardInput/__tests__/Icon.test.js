import React from 'react';
import { create } from 'react-test-renderer';

import Icon from '../Icon';

jest.mock('../../PaymentCard', () => 'PaymentCard');

describe('COMPONENT - FormCreditCardInput Icon', () => {
  it('renders correctly', () => {
    const component = create(<Icon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
