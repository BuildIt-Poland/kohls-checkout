// Main h1 element

import styled from 'styled-components';

import { spacingMedium, fontXLarge, fontWeightBold } from '../../styles/designTokens';

const Headline = styled.h1`
  margin: 0;
  margin-bottom: ${spacingMedium};
  font-size: ${fontXLarge};
  font-weight: ${fontWeightBold};
  line-height: 1;
`;

export default Headline;
