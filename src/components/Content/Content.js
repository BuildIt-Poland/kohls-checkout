// Generic responsive content wrapper

import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Content = styled.div`
  max-width: 100rem;
  padding: 0 ${spacingMedium};
  margin: 0 auto;
`;

export default Content;
