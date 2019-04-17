import React from 'react';
import PropTypes from 'prop-types';

import { MasterCard as MasterCardIcon } from '../Icons';
import Wrapper from './Wrapper';

function MasterCard({ small }) {
  return (
    <Wrapper small={small}>
      <MasterCardIcon />
    </Wrapper>
  );
}

MasterCard.propTypes = {
  cardNumber: PropTypes.bool,
  className: PropTypes.string
};

export default MasterCard;
