import styled from 'styled-components';

import media from '../../styles/media';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;

  ${media.phone`
    display: block;
  `};
`;

export default Wrapper;
