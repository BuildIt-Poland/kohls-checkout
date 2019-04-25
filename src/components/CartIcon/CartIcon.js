// Link to the cart with number of items located in header

import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

import { colorYellow, demoYellow } from '../../styles/designTokens';
import { item } from '../../types';
import { totalCartItemsCount } from '../../utils';
import ErrorBoundary from '../ErrorBoundary';
import { Cart as SimpleCartIcon } from '../Icons';
import Count from './Count';

const Link = styled(LinkBase)`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 1rem;
  /* background: ${demoYellow}; */

  &:focus {
    background-color: ${colorYellow};
    outline: 0;
  }
`;

function CartIcon({ items }) {
  return (
    <ErrorBoundary>
      <Link data-testid="cart-icon" to="/cart">
        <Count>{totalCartItemsCount(items)}</Count>
        <SimpleCartIcon />
      </Link>
    </ErrorBoundary>
  );
}

CartIcon.propTypes = {
  items: PropTypes.arrayOf(item)
};

export default CartIcon;
