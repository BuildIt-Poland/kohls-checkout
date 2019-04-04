import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontLarge } from '../../styles/designTokens';

const Header = styled.h2`
  font-size: ${fontLarge};
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function SectionHeader({ actionElement, children }) {
  return (
    <Header>
      {children}
      {actionElement}
    </Header>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
  actionElement: PropTypes.node
};

export default SectionHeader;
