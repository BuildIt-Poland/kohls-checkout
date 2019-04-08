import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacingSmall, colorRed } from '../../styles/designTokens';
import Input from '../Input';

const Label = styled.label`
  margin-bottom: ${spacingSmall};
`;

const ErrorLabel = styled.div`
  font-style: italic;
  color: ${colorRed};
`;

const InputForm = ({ className, label, error, ...props }) => {
  return (
    <>
      {label ? (
        <Label className={className}>
          {label}
          <Input error={error} {...props} />
        </Label>
      ) : (
        <Input error={error} {...props} />
      )}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.any
};

export default InputForm;
