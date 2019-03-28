import styled from 'styled-components';

import { colorRed } from '../../styles/designTokens';
import Price from './Price';

const DiscountPrice = styled(Price)`
  text-transform: uppercase;
  color: ${colorRed};
  font-weight: bold;
`;

export default DiscountPrice;
