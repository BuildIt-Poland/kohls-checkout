import React from 'react';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

import { Logo as LogoIcon } from '../Icons';

const Link = styled(LinkBase)`
  height: 100%;
  cursor: pointer;
  padding-top: 2rem;
`;

function Logo() {
  return (
    <Link to="/">
      <LogoIcon />
    </Link>
  );
}

export default Logo;
