import styled from 'styled-components';

import { colorLightGrey, colorDarkGrey, spacingSmall } from '../../styles/designTokens';
import TextLink from '../TextLink';

const RemoveItem = styled(TextLink)`
  color: ${colorLightGrey};
  padding: 0 ${spacingSmall};

  &:focus {
    color: ${colorDarkGrey};
  }
`;

export default RemoveItem;
