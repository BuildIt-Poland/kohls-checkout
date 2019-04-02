import styled from 'styled-components';

import media from '../../styles/media';
import BaseContent from '../Content';

const Content = styled(BaseContent)`
  display: flex;
  height: 4rem;
  ${media.tablet`
    padding: 0;
  `};
`;

export default Content;
