import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  &:not(:first-child) {
    padding-top: ${spacingLarge};
  }
`;

export default Content;
