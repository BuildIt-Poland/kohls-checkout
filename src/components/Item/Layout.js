import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-gap: ${spacingMedium};
`;

export default Layout;
