import styled from 'styled-components';

import SectionHeader from '../SectionHeader';

import { spacingMedium, colorLightGrey, borderWidthThin, spacingSmall } from '../../styles/designTokens';

const Header = styled(SectionHeader)`
  height: 6rem;
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
