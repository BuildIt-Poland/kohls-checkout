import React from 'react';

import Wrapper from './Wrapper';
import Content from '../Content';

function InfoBanner({ children }) {
  return (
    <Wrapper role="banner">
      <Content>{children}</Content>
    </Wrapper>
  );
}

export default InfoBanner;
