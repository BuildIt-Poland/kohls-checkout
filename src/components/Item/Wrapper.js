import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30% auto 25%;
  align-items: center;
  margin: ${spacingLarge} 0;
  grid-column-gap: 1rem;
`;

export default Wrapper;
