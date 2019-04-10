import styled from 'styled-components';

import {
  spacingSmall,
  fontMedium,
  borderWidthThin,
  colorLightGrey,
  colorTurquoise,
  colorRed
} from '../../styles/designTokens';

const Input = styled.input`
  border: ${borderWidthThin} solid ${props => (props.error ? colorRed : colorLightGrey)};
  border-radius: 0;
  height: 4rem;
  padding: 0 ${spacingSmall};
  font-size: ${fontMedium};
  outline: 0;
  width: 100%;

  &:disabled {
    background-color: ${colorLightGrey};
  }

  &:focus {
    border-color: ${props => (props.error ? colorRed : colorTurquoise)};
  }
`;

export default Input;
