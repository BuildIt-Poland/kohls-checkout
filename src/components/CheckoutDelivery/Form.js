import React from 'react';
import { Form as FormikForm } from 'formik';

import FormInput from '../FormInput';
import Text from '../Text';
import Row from './Row';

function Form() {
  return (
    <FormikForm>
      <Text dimmed>Please complete all fields.</Text>
      <Row>
        <FormInput name="firstName" label="First Name" />
        <FormInput name="lastName" label="Last Name" />
      </Row>
      <FormInput name="street" label="Street" />
      <FormInput name="city" label="City" />
      <Row>
        <FormInput name="state" label="State" />
        <FormInput name="zipCode" label="Zip Code" />
      </Row>
      <FormInput name="phone" type="phone" label="Phone Number" />
      <Text dimmed>Phone number will be used for shipping communications only.</Text>
    </FormikForm>
  );
}

export default Form;
