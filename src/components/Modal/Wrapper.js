import styled from 'styled-components';
import { zIndexModal } from '../../styles/designTokens';

const Wrapper = styled.section`
  background: white;
  height: auto;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: ${zIndexModal};
`;

export default Wrapper;
