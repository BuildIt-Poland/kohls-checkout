import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingSmall, colorRed } from '../../styles/designTokens';
import Select from '../Select';

const Label = styled.label`
  margin-bottom: ${spacingSmall};
`;

const ErrorMessage = styled.div`
  font-style: italic;
  color: ${colorRed};
`;

const SelectForm = function({ className, label, error, ...props }) {
  return (
    <Label className={className}>
      {label}
      <Select error={error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Label>
  );
};

SelectForm.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  className: PropTypes.string
};

export default SelectForm;
