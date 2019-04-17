import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Select from './Select';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

function SelectForm({ name, className, label, error, ...props }) {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Label className={className}>
          {label}
          <Select error={!!(form.touched[field.name] && form.errors[field.name])} {...field} {...props} />
          {form.touched[field.name] && form.errors[field.name] && (
            <ErrorMessage>{form.errors[field.name]}</ErrorMessage>
          )}
        </Label>
      )}
    </Field>
  );
}

SelectForm.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  className: PropTypes.string
};

export default SelectForm;
