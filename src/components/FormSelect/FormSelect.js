import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput';
import Select from './Select';
import Chevron from './Chevron';

function FormSelect({ options, ...props }) {
  return (
    <FormInput {...props} component={Select} icon={Chevron}>
      {options.map(option => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </FormInput>
  );
}

FormSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      disabled: PropTypes.bool
    }).isRequired
  )
};

export default FormSelect;
