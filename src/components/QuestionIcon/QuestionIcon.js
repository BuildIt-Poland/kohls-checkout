import React from 'react';
import styled from 'styled-components';

import Icon from '../Icons/QuestionCircle';

const StyledIcon = styled(Icon)`
  width: 17px;
  display: none;
`;

function QuestionIcon({ props }) {
  return (
    <a {...props}>
      <StyledIcon />
    </a>
  );
}

export default QuestionIcon;
