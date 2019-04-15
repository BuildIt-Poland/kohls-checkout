import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CREDIT_CARD_VISA, CREDIT_CARD_MASTER_CARD, CREDIT_CARD_AM_EX } from '../../constants/creditCardTypes';
import { spacingSmall } from '../../styles/designTokens';
import media from '../../styles/media';
import { creditCardType } from '../../utils';
import SectionHeaderBase from '../SectionHeader';

const SectionHeader = styled(SectionHeaderBase)`
  margin: 0;

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
  return <SectionHeader>{creditCardName(cardNumber)}</SectionHeader>;
}

CardName.propTypes = {
  cardNumber: PropTypes.string.isRequired
};

export default CardName;
