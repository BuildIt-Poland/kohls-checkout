import styled from 'styled-components';
import { colorLightBlue, colorWhite, fontSmall, spacingMedium } from '../../styles/designTokens';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spacingMedium};
  padding: 1rem;
  background-color: ${colorLightBlue};
  color: ${colorWhite};
  text-transform: uppercase;
  font-size: ${fontSmall};
`;

export default Layout;
