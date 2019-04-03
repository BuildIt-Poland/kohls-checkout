// Link to the cart with number of items located in header

import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

import { Cart as SimpleCartIcon } from '../Icons';
import Count from './Count';

const Link = styled(LinkBase)`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function CartIcon({ count }) {
  return (
    <Link data-testid="cart-icon" to="/cart">
      <Count>{count}</Count>
      <SimpleCartIcon />
    </Link>
  );
}

CartIcon.propTypes = {
  count: PropTypes.number.isRequired
};

export default CartIcon;
