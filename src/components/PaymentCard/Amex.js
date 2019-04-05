import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import { AmexCard } from '../Icons';

function Amex({ small }) {
  return (
    <Wrapper small={small}>
      <AmexCard />
    </Wrapper>
  );
}

Amex.propTypes = {
  cardNumber: PropTypes.bool
};

export default Amex;
