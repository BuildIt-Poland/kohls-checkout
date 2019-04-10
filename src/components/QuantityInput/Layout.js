import styled from 'styled-components';

import media from '../../styles/media';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 4rem 12rem 4rem;
  height: 4rem;

  ${media.phone`
    grid-template-columns: 4rem 8rem 4rem;
  `};
`;

export default Layout;
