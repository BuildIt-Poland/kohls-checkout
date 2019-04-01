import styled from 'styled-components';

import { colorBlack, fontMedium } from '../../styles/designTokens';

const RemoveButton = styled.button`
  border: 0;
  background: none;
  color: ${colorBlack};
  text-decoration: underline;
  font-size: ${fontMedium};
`;

export default RemoveButton;
