import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';
import Select from './Select';
import Chevron from './Chevron';

function FormSelect({ options, ...props }) {
  return (
    <FormInput {...props} component={Select} icon={Chevron}>
      {options.map(({ value, disabled, label }) => (
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ))}
    </FormInput>
  );
}

FormSelect.propTypes = {
  /** Array with options that are shown in FormSelect. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Specifies the label of a option */
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      /** Specifies the value of a option */
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      /** The specific option is disabled when present. */
      disabled: PropTypes.bool
    }).isRequired
  )
};

export default FormSelect;
