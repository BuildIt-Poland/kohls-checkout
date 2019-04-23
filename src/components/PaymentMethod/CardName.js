import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CREDIT_CARD_VISA, CREDIT_CARD_MASTER_CARD, CREDIT_CARD_AM_EX } from '../../constants/creditCardTypes';
import { spacingSmall, fontLarge } from '../../styles/designTokens';
import media from '../../styles/media';
import { creditCardType } from '../../utils';

const Name = styled.h4`
  margin: 0;
  font-size: ${fontLarge};

  ${media.phone`
    margin-top: ${spacingSmall};
  `};
`;

export function creditCardName(cardNumber) {
  const cardType = creditCardType(cardNumber);

  switch (cardType) {
    case CREDIT_CARD_VISA:
      return 'Visa';
    case CREDIT_CARD_MASTER_CARD:
      return 'Master Card';
    case CREDIT_CARD_AM_EX:
      return 'American Express';
    default:
      return null;
  }
}

function CardName({ cardNumber }) {
  return <Name>{creditCardName(cardNumber)}</Name>;
}

CardName.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default CardName;
