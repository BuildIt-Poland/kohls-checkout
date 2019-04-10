import styled from 'styled-components';

import { colorRed, fontSmall } from '../../styles/designTokens';

const ErrorMessage = styled.div`
  position: absolute;
  right: 0;
  font-size: ${fontSmall};
  color: ${colorRed};
`;

export default ErrorMessage;
