import React from 'react';
import { Route } from 'react-router-dom';

import { CHECKOUT_PATH, CART_PATH } from '../../constants/routes';
import Cart from '../Cart';
import Checkout from '../Checkout';
import Headline from './Headline';

function App() {
  return (
    <section>
      <Headline>Hello world</Headline>
      <Route exact path={CART_PATH} component={Cart} />
      <Route exact path={CHECKOUT_PATH} component={Checkout} />
    </section>
  );
}

export default App;
