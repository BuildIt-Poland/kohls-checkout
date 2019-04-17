import React from 'react';
import { node, bool, func } from 'prop-types';

import Wrapper from './Wrapper';
import Input from './Input';
import CheckMark from './CheckMark';
import Tick from './Tick';

function Checkbox({ children, checked, disabled, onChange }) {
  return (
    <Wrapper>
      <Input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <CheckMark disabled={disabled} />
      {children}
      {checked && <Tick />}
    </Wrapper>
  );
}

Checkbox.propTypes = {
  children: node,
  checked: bool,
  disabled: bool,
  onChange: func
};

export default Checkbox;
