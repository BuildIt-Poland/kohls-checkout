import React from 'react';
import { Route } from 'react-router-dom';

import { ROOT_PATH, CHECKOUT_PATH, CART_PATH } from '../../constants/routes';
import Header from '../Header';
import Main from './Main';
import LandingPage from '../LandingPage';
import Cart from '../Cart';
import Checkout from '../Checkout';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path={ROOT_PATH} component={LandingPage} />
        <Route exact path={CART_PATH} component={Cart} />
        <Route exact path={CHECKOUT_PATH} component={Checkout} />
      </Main>
    </>
  );
}

export default App;
