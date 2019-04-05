import styled from 'styled-components';

import { colorTurquoiseDimmed, fontWeightBold, fontMedium } from '../../styles/designTokens';

const TextLink = styled.a`
  color: ${colorTurquoiseDimmed};
  font-weight: ${fontWeightBold};
  font-size: ${fontMedium};
  text-decoration: underline;
  text-transform: none;
`;

export default TextLink;
