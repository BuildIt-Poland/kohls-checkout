import styled from 'styled-components';

import { spacingLarge, spacingMedium, demoBlue } from '../../styles/designTokens';

const Wrapper = styled.div`
  background-color: ${demoBlue};
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-gap: ${spacingMedium};
  margin-bottom: ${spacingLarge};
  align-items: center;
`;

export default Wrapper;
