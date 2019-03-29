import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colorBlack, colorWhite, fontSmall, colorDarkGrey } from '../../styles/designTokens';

const FlexLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
`;

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

function NavigationButton({ to, isActive, children }) {
  return (
    <FlexLink to={to}>
      <LinkContent isActive={isActive}>{children}</LinkContent>
    </FlexLink>
  );
}

export default NavigationButton;
