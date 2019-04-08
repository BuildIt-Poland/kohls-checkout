import React from 'react';
import PropTypes from 'prop-types';

import { AmexCard } from '../Icons';
import Wrapper from './Wrapper';

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
