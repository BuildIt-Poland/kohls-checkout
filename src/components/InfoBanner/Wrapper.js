import styled from 'styled-components';
import { colorTurquoise, colorWhite, fontMedium, spacingMedium } from '../../styles/designTokens';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spacingMedium};
  padding: 1rem;
  background-color: ${colorTurquoise};
  color: ${colorWhite};
  text-transform: uppercase;
  font-size: ${fontMedium};
`;

export default Layout;
