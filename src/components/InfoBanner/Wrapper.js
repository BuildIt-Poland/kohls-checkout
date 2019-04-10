import styled from 'styled-components';
import { colorTurquoise, colorWhite, fontMedium, spacingSmall } from '../../styles/designTokens';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: ${spacingSmall};
  background-color: ${colorTurquoise};
  color: ${colorWhite};
  font-size: ${fontMedium};
`;

export default Wrapper;
