import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingLarge } from '../../styles/designTokens';

const Wrapper = styled.section`
  margin-top: ${spacingLarge};
  border-top: ${borderWidthThin} solid ${colorLightGrey};
  padding-top: ${spacingLarge};
`;

export default Wrapper;
