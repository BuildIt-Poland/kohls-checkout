import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid ${props => (props.error ? 'red' : '#454545')};
  box-sizing: border-box;
  background-color: white;
  padding: 0.9rem 1rem 0.7rem;
  font-size: 1.2rem;
  outline: 0;
  width: 100%;
  height: 4rem;
  :disabled {
    background-color: #eee;
  }
`;

StyledInput.displayName = 'Input';

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  width: 100%;
`;

Label.displayName = 'Label';

const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  padding-right: 1rem;
  height: 20px;
  width: 30px;
  margin-top: -10px;
`;

const ErrorLabel = styled.div`
  font-size: 1rem;
  margin-top: 0.2rem;
  font-style: italic;
  color: red;
`;
const InputContainer = styled.div`
  position: relative;
`;

ErrorLabel.displayName = 'ErrorLabel';

const Input = ({ className, label, error, icon, ...props }) => {
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <InputContainer>
        <StyledInput error={error} {...props} />
        {icon && <InputIcon>{icon}</InputIcon>}
      </InputContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.any
};

export default Input;
