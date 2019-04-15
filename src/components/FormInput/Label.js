import styled from 'styled-components';

import { spacingMedium, fontMedium } from '../../styles/designTokens';

const Label = styled.label`
  position: relative;
  display: block;
  padding-bottom: ${spacingMedium};
  font-size: ${fontMedium};
`;

export default Label;
