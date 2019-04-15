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
        <FormInput name="firstName" type="text" label="First Name" />
        <FormInput name="lastName" type="text" label="Last Name" />
      </Row>
      <FormInput name="street" type="text" label="Street" />
      <FormInput name="city" type="text" label="City" />
      <Row>
        <FormInput name="state" type="text" label="State" />
        <FormInput name="zipCode" type="text" label="Zip Code" />
      </Row>
      <FormInput name="phone" type="phone" label="Phone Number" />
      <Text dimmed>Phone number will be used for shipping communications only.</Text>
    </FormikForm>
  );
}

export default Form;
