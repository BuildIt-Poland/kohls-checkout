// Declarative price component

import PropTypes from 'prop-types';

import { formattedPrice } from '../../utils';

function Price({ price }) {
  return formattedPrice(price);
}

Price.propTypes = {
  price: PropTypes.number.isRequired
};

export default Price;
