import React from 'react';
import { string, bool, object } from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

import Select from '../Select';
import { spacingSmall, colorRed } from '../../styles/designTokens';
import { selectOptions } from '../../types';

const Label = styled.label`
  margin-bottom: ${spacingSmall};
`;

const ErrorMessage = styled.div`
  font-style: italic;
  color: ${colorRed};
`;

function FormSelect({ name, label, value, options, disabled }) {
  return (
    <Field
      name={name}
      render={({ field, form }) => (
        <Label>
          {label}
          <Select
            value={value}
            disabled={disabled}
            error={form.touched[field.name] && form.errors[field.name]}
            options={options}
            field={field}
          />
          {form.touched[field.name] && form.errors[field.name] && (
            <ErrorMessage>{form.errors[field.name]}</ErrorMessage>
          )}
        </Label>
      )}
    />
  );
}

FormSelect.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  options: selectOptions.isRequired,
  disabled: bool,
  field: object
};

export default FormSelect;
