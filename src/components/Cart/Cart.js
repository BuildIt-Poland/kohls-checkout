import React from 'react';
import PropTypes from 'prop-types';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import { item } from '../../types';
import { totalCartItemsCount } from '../../utils';
import Page from '../Page';
import InfoBanner from '../InfoBanner';
import Headline from '../Headline';
import NextStep from '../NextStep';
import OrderSummary from '../OrderSummary';
import Content from '../Content';
import CartItemsList from '../CartItemsList';
import ShipingDetails from '../ShippingDetails';

function Cart({ items }) {
  const pageTitle = `Cart (${totalCartItemsCount(items)})`;
  const isCartNotEmpty = !!totalCartItemsCount(items);

  return (
    <>
      {isCartNotEmpty && (
        <InfoBanner>
          You have received <strong>free shipping</strong>!
        </InfoBanner>
      )}
      <Page title={pageTitle}>
        <Content>
          <Headline>{pageTitle}</Headline>
          <CartItemsList items={items} />
          <ShipingDetails />
        </Content>
        {isCartNotEmpty && <OrderSummary />}
        {isCartNotEmpty && <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />}
      </Page>
    </>
  );
}

Cart.propTypes = {
  items: PropTypes.arrayOf(item)
};

export default Cart;
