import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormSelect from '../FormSelect';
jest.mock('../../Select', () => 'Select');

const selectOptions = [
  {
    label: '01',
    value: '1'
  },
  {
    label: '02',
    value: '2'
  }
];

describe('COMPONENT - FormSelect', () => {
  it('renders correctly FormSelect', () => {
    const component = create(
      <Formik
        initialValues={{
          select: ''
        }}
      >
        <FormSelect name="select" label="MM" value="Select value" options={selectOptions} form="" />
      </Formik>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
