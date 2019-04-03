import styled from 'styled-components';

import { spacingLarge, spacingSmall } from '../../styles/designTokens';

const Wrapper = styled.div`
  position: relative;
  display: block;
  padding-left: ${spacingLarge};
  margin: ${spacingSmall};
  cursor: pointer;
`;

export default Wrapper;
