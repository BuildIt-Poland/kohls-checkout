import styled from 'styled-components';

import { colorLightGrey, borderWidthThin, spacingMedium } from '../../styles/designTokens';

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 1fr;
  grid-gap: ${spacingMedium};
  border-bottom: ${borderWidthThin} solid ${colorLightGrey};
  margin-bottom: ${spacingMedium};
  padding-bottom: ${spacingMedium};

  &:last-child {
    border-bottom: none;
  }
`;

export default ListItem;
