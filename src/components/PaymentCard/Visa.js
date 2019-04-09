import React from 'react';
import PropTypes from 'prop-types';

import { VisaCard } from '../Icons';
import Wrapper from './Wrapper';

function Visa({ small }) {
  return (
    <Wrapper small={small}>
      <VisaCard />
    </Wrapper>
  );
}

Visa.propTypes = {
  cardNumber: PropTypes.bool
};

export default Visa;
