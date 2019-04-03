import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';

const Section = styled.section`
  padding-top: ${spacingLarge};

  &:last-child {
    padding-bottom: 6rem;
  }
`;

export default Section;
