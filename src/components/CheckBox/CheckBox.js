import React from 'react';

import Wrapper from './Wrapper';
import Input from './Input';
import CheckMark from './CheckMark';
import Label from './Label';
import Tick from './Tick';

function Checkbox({ label, checked, onChange }) {
  return (
    <Wrapper>
      <Input data-testid="checkbox-input" type="checkbox" checked={checked} onChange={onChange} />
      <CheckMark />
      <Label>{label}</Label>
      {checked && <Tick data-testid="checkbox-tick" />}
    </Wrapper>
  );
}

export default Checkbox;
