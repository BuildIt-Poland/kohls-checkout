// Accesibility research according to https://hiddedevries.nl/en/blog/2017-04-04-how-to-make-inline-error-messages-accessible

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
