import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';
import BaseContent from '../Content';

const Content = styled(BaseContent)`
  padding-top: ${spacingLarge};
  padding-bottom: ${spacingLarge};
`;

export default Content;
