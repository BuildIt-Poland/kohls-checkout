import styled from 'styled-components';

import { colorDarkGrey, spacingMedium } from '../../styles/designTokens';
import TextBase from '../Text';

const Text = styled(TextBase)`
  color: ${colorDarkGrey};
  margin-bottom: ${spacingMedium};
`;

export default Text;
