import styled from 'styled-components';
import {
  colorBlack,
  colorWhite,
  colorYellow,
  colorLightGrey,
  fontMedium,
  fontWeightBold,
  borderWidthXThick
} from '../../styles/designTokens';

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border: 0;
  background: ${colorBlack};
  color: ${colorWhite};
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: ${colorLightGrey};
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &:focus {
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: 0;
  }
`;

export default Button;
