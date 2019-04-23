// Main h1 element

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingMedium, fontXLarge, fontWeightBold } from '../../styles/designTokens';

const Headline = styled.h1`
  margin: 0;
  margin-bottom: ${spacingMedium};
  font-size: ${fontXLarge};
  font-weight: ${fontWeightBold};
  line-height: 1;
`;

Headline.propTypes = {
  /** The content to render within the Headline */
  children: PropTypes.node.isRequired
};

/** @component */
export default Headline;
