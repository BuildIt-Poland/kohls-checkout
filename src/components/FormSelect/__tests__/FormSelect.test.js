import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormSelect from '../FormSelect';
jest.mock('../../Select', () => 'Select');

describe('COMPONENT - FormSelect', () => {
  it('renders correctly', () => {
    const props = {
      name: 'ExpMonth',
      label: 'Expiration Month'
    };
    const component = create(
      <Formik
        initialValues={{
          ExpMonth: 'YY'
        }}
      >
        <FormSelect {...props} />
      </Formik>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
