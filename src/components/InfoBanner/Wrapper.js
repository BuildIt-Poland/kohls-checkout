import styled from 'styled-components';
import { colorTurquoise, colorWhite, fontSmall, spacingMedium } from '../../styles/designTokens';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spacingMedium};
  padding: 1rem;
  background-color: ${colorTurquoise};
  color: ${colorWhite};
  text-transform: uppercase;
  font-size: ${fontSmall};
`;

export default Layout;
