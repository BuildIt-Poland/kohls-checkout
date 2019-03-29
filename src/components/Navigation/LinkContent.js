import styled from 'styled-components';

import { colorBlack, colorWhite, fontSmall, colorDarkGrey } from '../../styles/designTokens';

const LinkContent = styled.span`
  background: ${({ isActive }) => (isActive ? colorBlack : colorWhite)};
  border-right: 0;
  border: 1px solid ${colorDarkGrey};
  color: ${({ isActive }) => (isActive ? colorWhite : colorBlack)};
  display: flex;
  font-size: ${fontSmall};
  font-weight: 500;
  justify-content: center;
  padding: 15px;
  width: 100%;
  &:last-child {
    border-right: 1px;
  }
`;

export default LinkContent;
