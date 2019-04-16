// Button wrapper with all styles removed
// Useful for accessible action icons / target areas

import styled from 'styled-components';

import { colorYellow, borderWidthXThick } from '../../styles/designTokens';

const Hitbox = styled.button`
  border: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  min-height: 4rem;
  cursor: pointer;

  svg {
    display: block;
  }

  &:focus {
    background-color: ${colorYellow};
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: 0;
  }
`;

export default Hitbox;
