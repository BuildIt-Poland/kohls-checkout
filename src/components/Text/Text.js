import styled from 'styled-components';
import { fontMedium, fontWeightNormal, fontWeightBold, spacingSmall } from '../../styles/designTokens';

const Text = styled.p`
  font-size: ${fontMedium};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-weight: ${({ bold }) => (bold ? fontWeightBold : fontWeightNormal)};
  line-height: 1.4;
  margin: 0;
  margin-bottom: ${spacingSmall};

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Text;
