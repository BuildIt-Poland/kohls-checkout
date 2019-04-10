import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormInput from '../FormInput';
import Row from './Row';

// move to different file
const ShippingAddressSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too short!')
    .max(255, 'Too long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  state: Yup.string()
    .max(3, 'Not correct state!')
    .required('Required'),
  zipCode: Yup.string()
    .min(2, 'Too short!')
    .max(10, 'Too long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too short!')
    .max(50, 'Too long!')
    .required('Required')
});

function ShippingAddressForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '1-800-GOD'
      }}
      validationSchema={ShippingAddressSchema}
    >
      <Form>
        <Row>
          <FormInput name="firstName" type="text" label="First Name" />
          <FormInput name="lastName" type="text" label="Last Name" />
        </Row>
        <FormInput name="address" type="text" label="Address" />
        <FormInput name="city" type="text" label="City" />
        <Row>
          <FormInput name="state" type="text" label="State" />
          <FormInput name="zipCode" type="text" label="Zip Code" />
        </Row>
        <FormInput name="phone" type="phone" label="Phone Number" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default ShippingAddressForm;
