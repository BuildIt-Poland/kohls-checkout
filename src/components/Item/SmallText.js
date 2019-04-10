import styled from 'styled-components';

import { colorBlack, fontSmall, fontWeightNormal } from '../../styles/designTokens';

const SmallText = styled.p`
  font-size: ${fontSmall};
  font-weight: ${fontWeightNormal};
  color: ${colorBlack};
  margin: 0;
  text-decoration: ${({ strikeOff }) => (strikeOff ? 'line-through' : 'none')};
`;

export default SmallText;
