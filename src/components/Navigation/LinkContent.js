import styled from 'styled-components';

import { colorBlack, colorWhite, fontMedium, fontWeightBold, colorLightGrey } from '../../styles/designTokens';

function getFontColor({ isActive, isBlocked }) {
  if (isActive) {
    return colorWhite;
  } else if (isBlocked) {
    return colorLightGrey;
  }

  return colorBlack;
}

const LinkContent = styled.span`
  background: ${({ isActive }) => (isActive ? colorBlack : colorWhite)};
  color: ${getFontColor};
  display: flex;
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default LinkContent;
