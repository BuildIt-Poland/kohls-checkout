import styled from 'styled-components';

import { spacingLarge, spacingSmall } from '../../styles/designTokens';

const Wrapper = styled.label`
  position: relative;
  display: block;
  padding-left: ${spacingLarge};
  margin: ${spacingSmall};
  cursor: pointer;
`;

export default Wrapper;
