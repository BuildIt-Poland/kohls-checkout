import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChevronDown from './ChevronDown';
import {
  spacingSmall,
  borderWidthThin,
  colorBlack,
  colorRed,
  colorWhite,
  colorLightGrey
} from '../../styles/designTokens';

const SelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  appearance: none;
  border: ${borderWidthThin} solid ${props => (props.error ? colorRed : colorLightGrey)};
  border-radius: 0;
  background-color: ${colorWhite};
  padding: 0 ${spacingSmall};
  outline: 0;
  width: 100%;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);
  height: 4rem;

  :disabled {
    background-color: ${colorLightGrey};
  }
`;

function Select({ className, field, error, options, ...props }) {
  return (
    <SelectContainer className={className}>
      <ChevronDown disabled={props.disabled} fill={colorBlack} />
      <StyledSelect error={error} {...props}>
        {options.map((option, index) => (
          <option key={index} {...option} />
        ))}
      </StyledSelect>
    </SelectContainer>
  );
}

Select.propTypes = {
  error: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    }).isRequired
  )
};

export default Select;
