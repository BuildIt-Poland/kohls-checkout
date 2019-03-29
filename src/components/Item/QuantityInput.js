import styled from 'styled-components';

import { fontMedium, fontWeightBold } from '../../styles/designTokens';

const QuantityInput = styled.input`
  width: 6rem;
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  text-align: center;
  box-shadow: none;
  border: 0;
`;

export default QuantityInput;
