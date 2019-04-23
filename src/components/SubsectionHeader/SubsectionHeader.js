import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionHeader from '../SectionHeader';

import { fontLarge, fontWeightNormal, spacingSmall } from '../../styles/designTokens';

const Header = styled(SectionHeader)`
  font-size: ${fontLarge};
  font-weight: ${fontWeightNormal};
  margin: ${spacingSmall} 0;
`;

function SubsectionHeader({ children, ...props }) {
  return <Header {...props}>{children}</Header>;
}

SubsectionHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default SubsectionHeader;
