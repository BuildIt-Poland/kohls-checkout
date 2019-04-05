import React from 'react';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

import { Logo as LogoIcon } from '../Icons';

const Link = styled(LinkBase)`
  height: 100%;
  cursor: pointer;
  padding-top: 2rem;
  position: relative;
`;

const AccessibleText = styled.span`
  position: absolute;
  left: -99999rem;
`;

function Logo() {
  return (
    <Link data-testid="logo" to="/">
      <AccessibleText>The Store</AccessibleText>
      <LogoIcon />
    </Link>
  );
}

export default Logo;
