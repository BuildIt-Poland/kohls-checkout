import styled from 'styled-components';

import { colorBlack, colorWhite, fontMedium, fontWeightBold } from '../../styles/designTokens';

const LinkContent = styled.span`
  background: ${({ isActive }) => (isActive ? colorBlack : colorWhite)};
  color: ${({ isActive }) => (isActive ? colorWhite : colorBlack)};
  display: flex;
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default LinkContent;
