import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, colorWhite } from '../../styles/designTokens';

const Layout = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  background-color: ${colorWhite};
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  top: 0;
`;

export default Layout;
