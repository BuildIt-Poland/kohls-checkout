import styled from 'styled-components';

import { spacingMedium, spacingLarge } from '../../styles/designTokens';

const Section = styled.section`
  margin-bottom: ${spacingMedium};

  &:last-child {
    margin-bottom: ${spacingLarge};
  }
`;

export default Section;
