import styled from 'styled-components';

import { spacingSmall, fontMedium } from '../../styles/designTokens';

const Label = styled.label`
  position: relative;
  display: block;
  padding-bottom: ${spacingSmall};
  font-size: ${fontMedium};
`;

export default Label;
