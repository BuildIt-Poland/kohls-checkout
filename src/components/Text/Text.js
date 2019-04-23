import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  fontMedium,
  fontWeightNormal,
  fontWeightBold,
  spacingSmall,
  colorBlack,
  colorDarkGrey,
  colorTurquoiseDimmed
} from '../../styles/designTokens';

export function fontColor({ highlight, dimmed }) {
  if (highlight) {
    return colorTurquoiseDimmed;
  } else if (dimmed) {
    return colorDarkGrey;
  }
  return colorBlack;
}

/*

*/

const Text = styled.p`
  font-size: ${fontMedium};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-weight: ${({ bold }) => (bold ? fontWeightBold : fontWeightNormal)};
  line-height: 1.4;
  margin: 0;
  margin-bottom: ${spacingSmall};
  color: ${fontColor};

  &:last-child {
    margin-bottom: 0;
  }
`;

Text.propTypes = {
  /** Makes text Highlight */
  highlight: PropTypes.bool,
  /** Makes text Dimmed */
  dimmed: PropTypes.bool,
  /** Makes text Underline */
  underline: PropTypes.bool,
  /** Makes text bold  */
  bold: PropTypes.bool
};

/** @component */
export default Text;
