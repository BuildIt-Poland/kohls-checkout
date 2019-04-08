import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingSmall, colorRed } from '../../styles/designTokens';
import Input from '../Input';

const Label = styled.label`
  margin-bottom: ${spacingSmall};
`;

const ErrorMessage = styled.div`
  font-style: italic;
  color: ${colorRed};
`;

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
