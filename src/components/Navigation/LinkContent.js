import styled from 'styled-components';

import { colorBlack, colorWhite, fontSmall, fontWeightBold } from '../../styles/designTokens';

const LinkContent = styled.span`
  background: ${({ isActive }) => (isActive ? colorBlack : colorWhite)};
  color: ${({ isActive }) => (isActive ? colorWhite : colorBlack)};
  display: flex;
  font-size: ${fontSmall};
  font-weight: ${fontWeightBold};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default LinkContent;
