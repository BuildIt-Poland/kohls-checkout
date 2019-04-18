import styled from 'styled-components';

import {
  spacingSmall,
  fontMedium,
  borderWidthThin,
  borderWidthXThick,
  colorWhite,
  colorYellow,
  colorLightGrey,
  colorDarkGrey,
  colorTurquoise,
  colorRed
} from '../../styles/designTokens';

const Input = styled.input`
  border: ${borderWidthThin} solid ${props => (props.error ? colorRed : colorLightGrey)};
  background: ${colorWhite};
  border-radius: 0;
  height: 4rem;
  padding: 0 ${spacingSmall};
  font-size: ${fontMedium};
  outline: 0;
  width: 100%;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);

  &:disabled {
    background-color: ${colorLightGrey};
  }

  &:focus {
    border-color: ${props => (props.error ? colorRed : colorTurquoise)};
    outline: ${borderWidthXThick} solid ${colorYellow};
    outline-offset: 0;
  }

  &::placeholder {
    color: ${colorDarkGrey};
  }
`;

export default Input;
