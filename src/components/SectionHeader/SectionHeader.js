import React from 'react';
import styled from 'styled-components';

import { fontSmall } from '../../styles/designTokens';

const Header = styled.h3`
  font-size: ${fontSmall};
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

function SectionHeader({ actionElement, children }) {
  return (
    <Header>
      {children}
      {actionElement}
    </Header>
  );
}

export default SectionHeader;
