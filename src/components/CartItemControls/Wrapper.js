import styled from 'styled-components';

import { spacingMedium, demoYellow } from '../../styles/designTokens';

const Wrapper = styled.div`
  background: ${demoYellow};
  display: flex;
  justify-content: space-between;
  margin-top: ${spacingMedium};
`;

export default Wrapper;
