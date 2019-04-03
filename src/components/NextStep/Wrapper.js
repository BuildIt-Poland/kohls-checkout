import styled from 'styled-components';

import { zIndexStickyElement } from '../../styles/designTokens';

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  padding: 1.2rem;
  position: fixed;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: ${zIndexStickyElement};
`;

export default Wrapper;
