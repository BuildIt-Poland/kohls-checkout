import styled from 'styled-components';

import media from '../../styles/media';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  display: flex;
  height: 6rem;

  ${media.tablet`
    padding: 0;
  `};
`;

export default Content;
