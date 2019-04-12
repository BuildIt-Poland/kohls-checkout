import styled from 'styled-components';

import {
  colorWhite,
  colorLightGrey,
  borderWidthThin,
  spacingSmall,
  spacingMedium,
  zIndexStickyElement
} from '../../styles/designTokens';
import media from '../../styles/media';

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  padding: ${spacingSmall};
  position: fixed;
  width: 100%;
  background: ${colorWhite};
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  z-index: ${zIndexStickyElement};

  ${media.phone`
    padding-left: ${spacingMedium};
    padding-right: ${spacingMedium};
  `};
`;

export default Wrapper;
