import React from 'react';
import { create } from 'react-test-renderer';

import Form from '../Form';

jest.mock('../../FormInput', () => 'FormInput');
jest.mock('../../FormCreditCardInput', () => 'FormCreditCardInput');
jest.mock('../../FormSelect', () => 'FormSelect');
jest.mock('../../Text', () => 'Text');
jest.mock('../formOptions', () => ({ monthsOptions: () => [], yearsOptions: () => [] }));

describe('COMPONENT - CheckoutPayment form', () => {
  it('renders correctly', () => {
    const component = create(<Form />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
