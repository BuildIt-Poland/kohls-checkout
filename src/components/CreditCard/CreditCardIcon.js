import styled from 'styled-components';
import { css } from 'prop-types';

import cardImg from './assets/card-rev.png';

const iconsSprite = {
  'kolhs-cash': {
    x: 0,
    y: 0
  },
  'kolhs-valued-costumer': {
    x: 0,
    y: -21
  },
  'kohls-gift-card': {
    x: 0,
    y: -41
  },
  visa: {
    x: 0,
    y: -62
  },
  kohls: {
    x: 0,
    y: -83
  },
  'promo-code': {
    x: 0,
    y: -104
  },
  mastercard: {
    x: 0,
    y: -124
  },
  discover: {
    x: 0,
    y: -145
  },
  'american-express': {
    x: 0,
    y: -165
  }
};

const CreditCardIcon = styled.div`
  height: 100%;
  width: 100%;
  ${props =>
    iconsSprite[props.type] &&
    css`
      background: url(${cardImg});
      background-repeat: no-repeat;
      background-size: 29px auto;
      background-position: ${iconsSprite[props.type].x + 'px ' + iconsSprite[props.type].y + 'px'};
    `};
`;

export default CreditCardIcon;
