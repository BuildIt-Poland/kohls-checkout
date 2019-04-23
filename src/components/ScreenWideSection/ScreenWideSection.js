import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingMedium } from '../../styles/designTokens';

const ScreenWideSection = styled.section`
  width: 100%;
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  padding-top: ${spacingMedium};
`;

export default ScreenWideSection;
