import React from 'react';
import styled from 'styled-components';

import { fontMedium } from '../../styles/designTokens';

const Header = styled.h3`
  font-size: ${fontMedium};
  text-align: center;
  margin: 10px;
`;

function SectionHeader({ title = 'Section Header' }) {
  return <Header>{title}</Header>;
}

export default SectionHeader;
