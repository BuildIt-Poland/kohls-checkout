import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite, colorTurquoise, borderRadiusMedium } from '../../styles/designTokens';

const Button = styled.button`
  font-size: 1.6rem;
  background-color: ${colorTurquoise};
  color: ${colorWhite};
  border-radius: ${borderRadiusMedium};

  ${media.phone`
    width: 100%;
  `};
`;

export default Button;
