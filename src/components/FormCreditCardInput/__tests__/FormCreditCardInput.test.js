import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormCreditCardInput from '../FormCreditCardInput';

jest.mock('../Icon', () => () => 'Icon');

describe('COMPONENT - FormCreditCardInput', () => {
  it('renders correctly', () => {
    const props = {
      name: 'cardNumber',
      label: 'Credit Card Number'
    };

    const component = create(
      <Formik
        initialValues={{
          cardNumber: '340102315322282'
        }}
      >
        <FormCreditCardInput {...props} />
      </Formik>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
