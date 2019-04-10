import styled from 'styled-components';

import { colorRed, fontWeightBold } from '../../styles/designTokens';
import SmallText from './SmallText';

const Discount = styled(SmallText)`
  color: ${colorRed};
  font-weight: ${fontWeightBold};
`;

export default Discount;
