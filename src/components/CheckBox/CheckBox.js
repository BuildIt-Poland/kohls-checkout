import React from 'react';

import Wrapper from './Wrapper';
import Input from './Input';
import CheckMark from './CheckMark';
import Label from './Label';

function Checkbox({ label, checked, onChange }) {
  return (
    <Wrapper>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <CheckMark />
      <Label>{label}</Label>
    </Wrapper>
  );
}

export default Checkbox;
