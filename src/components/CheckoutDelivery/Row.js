// Responsive form row wrapper

import styled from 'styled-components';

import { spacingLarge } from '../../styles/designTokens';
import media from '../../styles/media';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spacingLarge};

  ${media.phone`
    display: block;
  `};
`;

export default Row;
