import React from 'react';
import { Route } from 'react-router-dom';

import { CHECKOUT_PATH, CART_PATH } from '../../constants/routes';
import Header from '../Header';
import Cart from '../Cart';
import Checkout from '../Checkout';

function App() {
  return (
    <section>
      <Header />
      <Route exact path={CART_PATH} component={Cart} />
      <Route exact path={CHECKOUT_PATH} component={Checkout} />
    </section>
  );
}

export default App;
