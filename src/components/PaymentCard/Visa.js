import React from 'react';
import PropTypes from 'prop-types';

import { VisaCard } from '../Icons';
import Wrapper from './Wrapper';

function Visa({ small, className }) {
  return (
    <Wrapper className={className} small={small}>
      <VisaCard />
    </Wrapper>
  );
}

Visa.propTypes = {
  cardNumber: PropTypes.bool,
  className: PropTypes.string
};

export default Visa;
