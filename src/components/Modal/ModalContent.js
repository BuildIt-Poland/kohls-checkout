import styled from 'styled-components';
import { zIndexModal } from '../../styles/designTokens';

const ModalContent = styled.section`
  background: white;
  border-radius: 0.5rem;
  height: auto;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  z-index: ${zIndexModal};
`;

export default ModalContent;
