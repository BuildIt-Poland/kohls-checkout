import React from 'react';

import Wrapper from './Wrapper';
import { AmexCard } from '../Icons';

function Amex({ small }) {
  return (
    <Wrapper small={small}>
      <AmexCard />
    </Wrapper>
  );
}

export default Amex;
