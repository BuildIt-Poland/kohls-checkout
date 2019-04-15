import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { borderWidthThin, colorLightGrey, borderWidthXThick, colorYellow } from '../../styles/designTokens';
import media from '../../styles/media';
import LinkContent from './LinkContent';

const FlexLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  border-left: ${borderWidthThin} solid ${colorLightGrey};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  &:last-child {
    border-right: ${borderWidthThin} solid ${colorLightGrey};
  }

  ${media.tablet`
    &:first-child {
      border-left: 0;
    }

    &:last-child {
      border-right: 0;
    }
  `};

  &:focus {
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: -${borderWidthXThick};
  }
`;

function NavigationButton({ to, isActive, isBlocked, children }) {
  return (
    <FlexLink data-testid="navigation-link" to={to} disabled={isBlocked}>
      <LinkContent isActive={isActive} isBlocked={isBlocked}>
        {children}
      </LinkContent>
    </FlexLink>
  );
}

export default NavigationButton;
