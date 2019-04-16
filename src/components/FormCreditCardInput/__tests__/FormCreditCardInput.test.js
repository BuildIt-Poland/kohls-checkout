import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormCreditCardInput from '../FormCreditCardInput';

jest.mock('../Icon', () => 'Icon');

describe('COMPONENT - FormCreditCardInput', () => {
  it('renders correctly', () => {
    const props = {
      name: 'cardNumber',
      label: 'First Name',
      placeholder: 'Type first name here...',
      type: 'text'
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
