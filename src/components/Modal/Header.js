import styled from 'styled-components';

import { spacingSmall, fontSmall, colorLightGrey } from '../../styles/designTokens';

const Header = styled.section`
  font-size: ${fontSmall};
  font-weight: bold;
  padding: ${spacingSmall};
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${colorLightGrey};
`;

export default Header;
