import styled from 'styled-components';

import { colorLightGrey, colorDarkGrey } from '../../styles/designTokens';
import TextLink from '../TextLink';

const RemoveItem = styled(TextLink)`
  color: ${colorLightGrey};
  background: none;
  border: 0;
  cursor: pointer;

  &:focus {
    color: ${colorDarkGrey};
  }
`;

export default RemoveItem;
