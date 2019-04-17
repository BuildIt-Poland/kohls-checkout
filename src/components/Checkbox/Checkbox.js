import React from 'react';
import { node, bool, func } from 'prop-types';

import Wrapper from './Wrapper';
import Input from './Input';
import CheckMark from './CheckMark';
import Tick from './Tick';

function Checkbox({ children, checked, onChange, disabled }) {
  return (
    <Wrapper>
      <Input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <CheckMark disabled={disabled} />
      {children}
      {checked && <Tick />}
    </Wrapper>
  );
}

Checkbox.propTypes = {
  children: node,
  checked: bool,
  onChange: func,
  disabled: bool
};

export default Checkbox;
