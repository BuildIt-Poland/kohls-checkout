import React from 'react';
import styled from 'styled-components';

import { Tick as TickIcon } from '../Icons';
import { colorTurquoise } from '../../styles/designTokens';

const Span = styled.span`
  position: absolute;
  left: 0.5rem;
  top: 0;
  svg {
    fill: ${colorTurquoise};
  }
`;

function Tick() {
  return (
    <Span>
      <TickIcon />
    </Span>
  );
}

export default Tick;
