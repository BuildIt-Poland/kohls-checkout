import React from 'react';
import { Form } from 'formik';

import FormInput from '../FormInput';
import Text from './Text';
import Row from './Row';

function ShippingAddressForm() {
  return (
    <Form>
      <Row>
        <FormInput name="firstName" type="text" label="First Name" placeholder="Type in name here" />
        <FormInput name="lastName" type="text" label="Last Name" />
      </Row>
      <FormInput name="address" type="text" label="Address" />
      <FormInput name="city" type="text" label="City" />
      <Row>
        <FormInput name="state" type="text" label="State" />
        <FormInput name="zipCode" type="text" label="Zip Code" />
      </Row>
      <FormInput name="phone" type="phone" label="Phone Number" />
      <Text>Phone number will be used for shipping communications only.</Text>
    </Form>
  );
}

export default ShippingAddressForm;
