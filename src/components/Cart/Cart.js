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
import ShippingDetails from '../ShippingDetails';
import TextLink from '../TextLink';

function Cart({ items, refillDemoCart }) {
  const pageTitle = `Cart (${totalCartItemsCount(items)})`;
  const isCartEmpty = !totalCartItemsCount(items);

  if (!isCartEmpty) {
    return (
      <>
        <InfoBanner>
          You have received <strong>free shipping</strong>!
        </InfoBanner>
        <Page title={pageTitle}>
          <Content>
            <Headline>{pageTitle}</Headline>
            <CartItemsList items={items} />
            <ShippingDetails />
          </Content>
          <OrderSummary />
          <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
        </Page>
      </>
    );
  }

  return (
    <Page title={pageTitle}>
      <Content>
        <Headline>{pageTitle}</Headline>
        <CartItemsList items={items} />
        <TextLink onClick={refillDemoCart} as="button">
          Put some items in cart!
        </TextLink>
      </Content>
    </Page>
  );
}

Cart.propTypes = {
  items: PropTypes.arrayOf(item),
  refillDemoCart: PropTypes.func.isRequired
};

export default Cart;
