import styled from 'styled-components';

import CheckMark from './CheckMark';

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  &:checked ~ ${CheckMark} {
    &:after {
      display: block;
    }
  }
`;

export default Input;
