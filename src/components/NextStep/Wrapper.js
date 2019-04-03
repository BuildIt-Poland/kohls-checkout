import styled from 'styled-components';

import {
  colorWhite,
  colorLightGrey,
  borderWidthThin,
  spacingSmall,
  zIndexStickyElement
} from '../../styles/designTokens';

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  padding: ${spacingSmall};
  position: fixed;
  width: 100%;
  background: ${colorWhite};
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  z-index: ${zIndexStickyElement};
`;

export default Wrapper;
