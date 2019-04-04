import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingMedium } from '../../styles/designTokens';

const Wrapper = styled.section`
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  padding-top: ${spacingMedium};
`;

export default Wrapper;
