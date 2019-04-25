import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingMedium, demoPink } from '../../styles/designTokens';

const ListItem = styled.li`
  background: ${demoPink};
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  margin-bottom: ${spacingMedium};
  padding-bottom: ${spacingMedium};
  list-style: none;

  &:last-child {
    border-bottom: none;
  }
`;

export default ListItem;
