import styled from 'styled-components';
import { colorTurquoise, colorWhite, colorLightGrey, fontWeightBold, fontLarge } from '../../styles/designTokens';

const Button = styled.button`
  background: ${colorTurquoise};
  border: 0;
  color: ${colorWhite};
  display: block;
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  padding: 1.2rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  max-width: 96rem;
  margin: 0 auto;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    background-color: ${colorLightGrey};
  }
`;

export default Button;
