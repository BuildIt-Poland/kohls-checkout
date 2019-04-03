import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { borderWidthThin, colorLightGrey } from '../../styles/designTokens';
import media from '../../styles/media';
import LinkContent from './LinkContent';

const FlexLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  border-left: ${borderWidthThin} solid ${colorLightGrey};
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
`;

function NavigationButton({ to, isActive, children }) {
  return (
    <FlexLink data-testid="navigation-link" to={to}>
      <LinkContent isActive={isActive}>{children}</LinkContent>
    </FlexLink>
  );
}

export default NavigationButton;
