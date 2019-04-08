import styled from 'styled-components';

import { colorBlack, fontMedium, fontWeightBold, spacingSmall } from '../../styles/designTokens';

const Name = styled.h3`
  color: ${colorBlack};
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  margin: 0;
  margin-bottom: ${spacingSmall};
  line-height: 1.2;
`;

export default Name;
