import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingMedium } from '../../styles/designTokens';

const ListItem = styled.li`
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  margin-bottom: ${spacingMedium};
  padding-bottom: ${spacingMedium};

  &:last-child {
    border-bottom: none;
  }
`;

export default ListItem;
