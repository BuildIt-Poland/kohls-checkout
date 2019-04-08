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

const Input = props => {
  return <StyledInput {...props} />;
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  className: PropTypes.any
};

export default Input;
