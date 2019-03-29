import styled from 'styled-components';

import { fontWeightBold } from '../../styles/designTokens';
import Price from './Price';

const TotalPrice = styled(Price)`
  font-weight: ${fontWeightBold};
`;

export default TotalPrice;
