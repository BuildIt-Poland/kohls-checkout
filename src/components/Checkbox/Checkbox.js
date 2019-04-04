import React from 'react';

import Wrapper from './Wrapper';
import Input from './Input';
import CheckMark from './CheckMark';
import Text from './Text';
import Tick from './Tick';

function Checkbox({ label, checked, onChange }) {
  return (
    <Wrapper>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <CheckMark />
      <Text>{label}</Text>
      {checked && <Tick />}
    </Wrapper>
  );
}

export default Checkbox;
