import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Label from './Label';
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import Icon from './Icon';

const FormCreditCardInput = ({ name, label, placeholder, ...props }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Label>
          {label}
          <Input
            type="text"
            placeholder={placeholder}
            error={form.touched[field.name] && form.errors[field.name]}
            {...field}
            {...props}
          />
          <Icon small={true} cardNumber={field.value} />
          {form.touched[field.name] && form.errors[field.name] && (
            <ErrorMessage>{form.errors[field.name]}</ErrorMessage>
          )}
        </Label>
      )}
    </Field>
  );
};

FormCreditCardInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default FormCreditCardInput;
