import styled from 'styled-components';
import { fontSmall } from '../../styles/designTokens';

const Text = styled.span`
  font-size: ${fontSmall};
  text-decoration: ${({ isUnderline }) => (isUnderline ? 'underline' : 'none')};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
`;

export default Text;
