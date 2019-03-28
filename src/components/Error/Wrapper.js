import styled from 'styled-components';

import {
  colorRed,
  colorLightRed,
  colorBlack,
  fontMedium,
  fontWeightBold,
  spacingSmall,
  borderWidthThick
} from '../../styles/designTokens';

// TODO: Probably add generic InfoBox later @blurbyte
const Wrapper = styled.p`
  width: 100%;
  border: ${borderWidthThick} solid ${colorRed};
  color: ${colorBlack};
  background-color: ${colorLightRed};
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  padding: ${spacingSmall};
`;

export default Wrapper;
