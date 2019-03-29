import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LinkContent from './LinkContent';

const FlexLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
`;

function NavigationButton({ to, isActive, children }) {
  return (
    <FlexLink to={to}>
      <LinkContent isActive={isActive}>{children}</LinkContent>
    </FlexLink>
  );
}

export default NavigationButton;
