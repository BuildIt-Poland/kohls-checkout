// Button wrapper with all styles removed
// Useful for accessible action icons / target areas

import styled from 'styled-components';

const Hitbox = styled.button`
  border: 0;
  background: none;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2rem;
  cursor: pointer;

  svg {
    display: block;
  }
`;

export default Hitbox;
