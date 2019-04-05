import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  spacingSmall,
  borderWidthThin,
  borderRadiusLarge,
  colorDarkGrey,
  colorBlack,
  colorRed
} from '../../styles/designTokens';

const StyledInput = styled.input`
  border: ${borderWidthThin} solid ${props => (props.error ? colorRed : colorBlack)};
  border-radius: ${borderRadiusLarge};
  padding: ${spacingSmall};
  outline: 0;
  width: 100%;

  :disabled {
    background-color: ${colorDarkGrey};
  }
`;

const Label = styled.label`
  margin-bottom: ${spacingSmall};
`;

const ErrorLabel = styled.div`
  font-style: italic;
  color: ${colorRed};
`;

const Input = ({ className, label, error, ...props }) => {
  return (
    <>
      {label ? (
        <Label className={className}>
          {label}
          <StyledInput error={error} {...props} />
        </Label>
      ) : (
        <StyledInput error={error} {...props} />
      )}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.any
};

export default Input;
