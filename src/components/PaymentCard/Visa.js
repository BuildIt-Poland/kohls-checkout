import React from 'react';

import { VisaCard } from '../Icons';
import Wrapper from './Wrapper';

function Visa({ small }) {
  return (
    <Wrapper small={small}>
      <VisaCard />
    </Wrapper>
  );
}

export default Visa;
