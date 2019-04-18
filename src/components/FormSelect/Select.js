import React from 'react';
import styled from 'styled-components';

import InputBase from '../Input';

const Input = styled(InputBase)`
  appearance: none;
  margin-top: 0.4rem;
`;

function Select(props) {
  return <Input as="select" {...props} />;
}

export default Select;
