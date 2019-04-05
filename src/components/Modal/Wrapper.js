import styled from 'styled-components';

import { zIndexModal, spacingMedium } from '../../styles/designTokens';
import media from '../../styles/media';

const Wrapper = styled.section`
  background: white;
  height: auto;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: ${zIndexModal};

  ${media.phone`
    width: calc(100% - ${spacingMedium} - ${spacingMedium});
  `};
`;

export default Wrapper;
