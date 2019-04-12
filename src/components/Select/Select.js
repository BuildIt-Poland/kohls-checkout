import React from 'react';
import { string, bool, object } from 'prop-types';

import Wrapper from './Wrapper';
import ChevronnDown from './ChevronDown';
import StyledSelect from './StyledSelect';
import { selectOptions } from '../../types';

function Select({ value, options, disabled, error, field }) {
  return (
    <Wrapper>
      <ChevronnDown />
      <StyledSelect error={error} disabled={disabled} {...field}>
        <option value="">{value}</option>
        {options.map(({ label, value, disabled }, index) => (
          <option key={index} label={label} value={value} disabled={disabled} />
        ))}
      </StyledSelect>
    </Wrapper>
  );
}

Select.propTypes = {
  value: string.isRequired,
  options: selectOptions.isRequired,
  error: string,
  disabled: bool,
  field: object
};

export default Select;
