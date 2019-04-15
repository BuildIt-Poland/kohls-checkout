import styled from 'styled-components';
import { colorTurquoise, colorWhite, fontMedium, spacingSmall } from '../../styles/designTokens';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: ${spacingSmall} 0;
  background-color: ${colorTurquoise};
  color: ${colorWhite};
  font-size: ${fontMedium};
  text-align: center;
`;

export default Wrapper;
