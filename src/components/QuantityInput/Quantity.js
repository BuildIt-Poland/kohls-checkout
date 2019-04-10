import styled from 'styled-components';

import { borderWidthThin, colorLightGrey, fontMedium, fontWeightNormal } from '../../styles/designTokens';

const Quantity = styled.p`
  height: 100%;
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: ${fontMedium};
  font-weight: ${fontWeightNormal};
`;

export default Quantity;
