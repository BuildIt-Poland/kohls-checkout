import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Label from './Label';
import ErrorMessage from './ErrorMessage';
import Input from './Input';

const FormInput = ({ name, label, placeholder, type }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Label>
          {label}
          <Input
            type={type}
            placeholder={placeholder}
            error={form.touched[field.name] && form.errors[field.name]}
            {...field}
          />
          {form.touched[field.name] && form.errors[field.name] && (
            <ErrorMessage>{form.errors[field.name]}</ErrorMessage>
          )}
        </Label>
      )}
    </Field>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default FormInput;
