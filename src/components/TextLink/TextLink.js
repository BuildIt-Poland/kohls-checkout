import styled from 'styled-components';

import {
  colorTurquoiseDimmed,
  colorYellow,
  fontWeightBold,
  fontMedium,
  borderWidthXThick
} from '../../styles/designTokens';

const TextLink = styled.a`
  color: ${colorTurquoiseDimmed};
  font-weight: ${fontWeightBold};
  font-size: ${fontMedium};
  padding: 0;
  text-decoration: underline;
  text-transform: none;
  background: none;
  border: 0;
  cursor: pointer;

  &:focus {
    background-color: ${colorYellow};
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: 0;
  }
`;

/** @component */
export default TextLink;
