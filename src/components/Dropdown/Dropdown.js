import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chevron from '../Icons/Chevron';

import {
  borderRadiusLarge,
  spacingSmall,
  borderWidthThin,
  colorBlack,
  colorRed,
  colorWhite,
  colorLightGrey
} from '../../styles/designTokens';

const DropDownContainer = styled.div`
  position: relative;
`;

const StyledChevronDown = styled(Chevron)`
  position: absolute;
  top: 1.3rem;
  right: 0;
  margin-right: 1rem;
`;

const Select = styled.select`
  appearance: none;
  border: ${borderWidthThin} solid ${props => (props.error ? colorRed : colorBlack)};
  border-radius: ${borderRadiusLarge};
  background-color: ${colorWhite};
  padding: ${spacingSmall};
  outline: 0;
  width: 100%;

  :disabled {
    background-color: ${colorLightGrey};
  }
`;

const DropDown = function({ className, label, error, type, options, ...props }) {
  return (
    <DropDownContainer className={className}>
      <StyledChevronDown disabled={props.disabled} />
      <Select error={error} {...props}>
        {options.map((props, index) => (
          <option key={index} {...props} />
        ))}
      </Select>
    </DropDownContainer>
  );
};

DropDown.propTypes = {
  error: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      disabled: PropTypes.bool
    })
  )
};

export default DropDown;
