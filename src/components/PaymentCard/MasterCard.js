import React from 'react';

import { MasterCard as MasterCardIcon } from '../Icons';
import Wrapper from './Wrapper';

function MasterCard({ small }) {
  return (
    <Wrapper small={small}>
      <MasterCardIcon />
    </Wrapper>
  );
}

export default MasterCard;
