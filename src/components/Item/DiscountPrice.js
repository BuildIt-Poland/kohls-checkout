import styled from 'styled-components';

import { colorRed, fontWeightBold } from '../../styles/designTokens';
import Price from './Price';

const DiscountPrice = styled(Price)`
  text-transform: uppercase;
  color: ${colorRed};
  font-weight: ${fontWeightBold};
`;

export default DiscountPrice;
