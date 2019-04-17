import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormSelect from '../FormSelect';

describe('COMPONENT - FormSelect', () => {
  it('renders correctly', () => {
    const options = [
      {
        value: 'NY',
        label: 'New York',
        disabled: true
      },
      {
        value: 'NOLA',
        label: 'New Orleans'
      },
      {
        value: 'LON',
        label: 'London'
      }
    ];

    const component = create(
      <Formik
        initialValues={{
          city: 'NOLA'
        }}
      >
        <FormSelect name="city" label="City" options={options} />
      </Formik>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
