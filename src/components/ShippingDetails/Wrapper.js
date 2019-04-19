import styled from 'styled-components';

import { spacingLarge, spacingMedium } from '../../styles/designTokens';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-gap: ${spacingMedium};
  margin-bottom: ${spacingLarge};
  align-items: center;
`;

export default Wrapper;
