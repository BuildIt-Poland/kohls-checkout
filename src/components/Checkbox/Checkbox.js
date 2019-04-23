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
  /** Receives a node that is rendered next to the checkbox */
  children: node,
  /** Specifies the if the checkbox should be pre-selected (checked) */
  checked: bool,
  /** The specific option is disabled when present */
  disabled: bool,
  /** Exposes the onChange event, it will occurs when the value of an element has been changed. */
  onChange: func
};

export default Checkbox;
