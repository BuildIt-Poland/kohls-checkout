import styled from 'styled-components';

import { fontSmall } from '../../styles/designTokens';

const Text = styled.span`
  font-size: ${fontSmall};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-transform: none;
`;

export default Text;
