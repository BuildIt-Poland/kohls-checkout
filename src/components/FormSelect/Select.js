import React from 'react';
import styled from 'styled-components';

import InputBase from '../Input';

const Input = styled(InputBase)`
  appearance: none;
`;

function Select(props) {
  return <Input as="select" {...props} />;
}

export default Select;
