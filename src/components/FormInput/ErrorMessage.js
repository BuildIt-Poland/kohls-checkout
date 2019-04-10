import styled from 'styled-components';

import { colorRed, fontSmall } from '../../styles/designTokens';

const ErrorMessage = styled.div`
  font-size: ${fontSmall};
  color: ${colorRed};
  padding-top: 0.2rem;
`;

export default ErrorMessage;
