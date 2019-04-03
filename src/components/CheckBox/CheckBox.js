import React from 'react';

import Wrapper from './Wrapper';
import HiddenCheckBox from './HiddenCheckBox';
import CheckMark from './CheckMark';
import CheckBoxLabel from './CheckBoxLabel';

function CheckBox({ labelText, ...props }) {
  return (
    <Wrapper>
      <HiddenCheckBox {...props} />
      <CheckMark />
      <CheckBoxLabel>{labelText}</CheckBoxLabel>
    </Wrapper>
  );
}

export default CheckBox;
