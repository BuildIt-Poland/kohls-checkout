import styled from 'styled-components';

import {
  borderRadiusLarge,
  spacingSmall,
  borderWidthThin,
  colorBlack,
  colorRed,
  colorWhite,
  colorLightGrey
} from '../../styles/designTokens';

const StyledSelect = styled.select`
  appearance: none;
  border: ${borderWidthThin} solid ${props => (props.error ? colorRed : colorBlack)};
  border-radius: ${borderRadiusLarge};
  background-color: ${colorWhite};
  padding: ${spacingSmall};
  outline: 0;
  width: 100%;

  :disabled {
    background-color: ${colorLightGrey};
  }
`;

export default StyledSelect;
