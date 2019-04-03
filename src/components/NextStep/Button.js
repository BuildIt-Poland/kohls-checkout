import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorTurquoise, colorWhite, fontWeightBold } from '../../styles/designTokens';

const Button = styled(Link)`
  background: ${colorTurquoise};
  color: ${colorWhite};
  display: block;
  font-size: ${fontWeightBold};
  font-weight: 600;
  padding: 1.2rem;
  text-align: center;
  text-decoration: none;
  max-width: 96rem;
  margin: 0 auto;
`;

export default Button;
