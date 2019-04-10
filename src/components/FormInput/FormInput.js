import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import ErrorMessage from './ErrorMessage';
import Input from './Input';

const InputForm = ({ className, label, error, ...props }) => {
  return (
    <Label className={className}>
      {label}
      <Input error={error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Label>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default InputForm;
