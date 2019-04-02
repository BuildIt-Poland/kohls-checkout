import React from 'react';
import { Route } from 'react-router-dom';

import { ROOT_PATH, CHECKOUT_PATH, CART_PATH } from '../../constants/routes';
import Header from '../Header';
import MainContent from './MainContent';
import LandingPage from '../LandingPage';
import Cart from '../Cart';
import Checkout from '../Checkout';

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Route exact path={ROOT_PATH} component={LandingPage} />
        <Route exact path={CART_PATH} component={Cart} />
        <Route exact path={CHECKOUT_PATH} component={Checkout} />
      </MainContent>
    </>
  );
}

export default App;
