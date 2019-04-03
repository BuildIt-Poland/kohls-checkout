import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  padding-top: ${spacingLarge};
  padding-bottom: ${spacingLarge};
`;

export default Content;
