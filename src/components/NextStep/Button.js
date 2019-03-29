import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colorTurquoise, colorWhite, fontMedium } from '../../styles/designTokens';

const Button = styled(Link)`
  background: ${colorTurquoise};
  color: ${colorWhite};
  display: block;
  font-size: ${fontMedium};
  font-weight: 600;
  padding: 1.2rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

export default Button;
