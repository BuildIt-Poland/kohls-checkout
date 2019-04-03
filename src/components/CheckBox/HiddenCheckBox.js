import styled from 'styled-components';

import CheckMark from './CheckMark';

const HiddenCheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  visibility: hidden;
  &:checked ~ ${CheckMark} {
    &:after {
      display: block;
    }
  }
`;

export default HiddenCheckBox;
