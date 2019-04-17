import React from 'react';
import styled from 'styled-components';

import { zIndexDefault } from '../../styles/designTokens';
import { Chevron as ChevronIcon } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  top: 3.6rem;
  right: 1rem;
  z-index: ${zIndexDefault};
  pointer-events: none;
`;

function Chevron() {
  return (
    <Wrapper>
      <ChevronIcon />
    </Wrapper>
  );
}

export default Chevron;
