import styled from 'styled-components';

import { spacingSmall } from '../../styles/designTokens';

const TextBlock = styled.div`
  margin-bottom: ${spacingSmall};

  &:last-child {
    margin-bottom: 0;
  }
`;

export default TextBlock;
