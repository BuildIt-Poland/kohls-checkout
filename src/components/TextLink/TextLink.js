import styled from 'styled-components';

import { colorTurquoise, fontWeightBold, fontMedium } from '../../styles/designTokens';

const TextLink = styled.a`
  color: ${colorTurquoise};
  font-weight: ${fontWeightBold};
  font-size: ${fontMedium};
  text-decoration: underline;
`;

export default TextLink;
