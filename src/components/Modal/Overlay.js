import styled from 'styled-components';
import { zIndexModalOverlay } from '../../styles/designTokens';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndexModalOverlay};
`;

export default Overlay;
