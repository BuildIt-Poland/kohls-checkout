import React from 'react';
import PropTypes from 'prop-types';

import { AmexCard } from '../Icons';
import Wrapper from './Wrapper';

function Amex({ small, className }) {
  return (
    <Wrapper className={className} small={small}>
      <AmexCard />
    </Wrapper>
  );
}

Amex.propTypes = {
  cardNumber: PropTypes.bool,
  className: PropTypes.string
};

export default Amex;
