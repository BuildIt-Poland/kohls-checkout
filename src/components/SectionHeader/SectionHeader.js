import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fontLarge, spacingSmall } from '../../styles/designTokens';

const Header = styled.h2`
  font-size: ${fontLarge};
  text-align: left;
  margin: ${spacingSmall} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function SectionHeader({ actionElement, children, ...props }) {
  return (
    <Header {...props}>
      {children}
      {actionElement}
    </Header>
  );
}

SectionHeader.propTypes = {
  /** The content to render within the SectionHeader */
  children: PropTypes.node.isRequired,
  /** Instantiated react node to render as a sub action element */
  actionElement: PropTypes.node
};

export default SectionHeader;
