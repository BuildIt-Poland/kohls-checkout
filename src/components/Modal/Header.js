import styled from 'styled-components';

import { spacingMedium, colorLightGrey, borderWidthThin, spacingSmall, fontLarge } from '../../styles/designTokens';

const Header = styled.h3`
  height: 6rem;
  font-size: ${fontLarge};
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 ${spacingSmall} 0 ${spacingMedium};
  text-align: left;
  line-height: 1;
`;

export default Header;
