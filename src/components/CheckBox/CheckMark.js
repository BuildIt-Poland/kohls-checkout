import styled from 'styled-components';

import { borderRadiusMedium, borderWidthThick, colorLightGrey, borderWidthThin } from '../../styles/designTokens';

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.8rem;
  width: 2.8rem;
  border: ${borderWidthThick} solid ${colorLightGrey};
  border-radius: ${borderRadiusMedium};
  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 0.9rem;
    top: 0.3rem;
    width: 0.6rem;
    height: 1.6rem;
    border: ${borderWidthThin} solid #95c96f;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export default CheckMark;
