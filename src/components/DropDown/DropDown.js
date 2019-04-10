import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ChevronDown from '../Icons/ChevronDown';

const DropDownContainer = styled.div`
  position: relative;
`;

const StyledChevronDown = styled(ChevronDown)`
  position: absolute;
  top: 1rem;
  right: 0;
  padding-right: 1rem;
  ${props => props.disabled && 'color: grayText;'}
`;

const Select = styled.select`
  appearance: none;
  border: 1px solid #454545;
  border-radius: 0;
  background-color: white;
  padding: 0.9rem 1rem 0.7rem;
  font-size: 1rem;
  outline: 0;
  width: 100%;

  :disabled {
    background-color: #eee;
  }
`;

Select.displayName = 'Select';

const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

Label.displayName = 'Label';

const ErrorLabel = styled.div`
  font-size: 1rem;
  margin-top: 0.2rem;
  font-style: italic;
  color: red;
`;
ErrorLabel.displayName = 'ErrorLabel';

const DropDown = ({ className, label, error, type, options, ...props }) => {
  return (
    <div className={className}>
      <Label>
        {label}
        <DropDownContainer>
          <StyledChevronDown disabled={props.disabled} />
          <Select error={error} {...props}>
            {options.map((props, index) => (
              <option key={index} {...props} />
            ))}
          </Select>
        </DropDownContainer>
      </Label>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  );
};

DropDown.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default DropDown;
