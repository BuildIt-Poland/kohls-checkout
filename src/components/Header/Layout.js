import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, colorWhite, zIndexStickyElement } from '../../styles/designTokens';

const Layout = styled.header`
  position: fixed;
  z-index: ${zIndexStickyElement};
  width: 100%;
  height: 6rem;
  background-color: ${colorWhite};
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  top: 0;
  left: 0;
`;

export default Layout;
