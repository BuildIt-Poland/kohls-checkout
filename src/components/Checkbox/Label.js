import styled from 'styled-components';

import { fontWeightNormal, spacingSmall, fontMedium, colorBlack } from '../../styles/designTokens';

const Label = styled.label`
  display: block;
  color: ${colorBlack};
  font-size: ${fontMedium};
  font-weight: ${fontWeightNormal};
  margin: ${spacingSmall};
  cursor: pointer;
`;

export default Label;
