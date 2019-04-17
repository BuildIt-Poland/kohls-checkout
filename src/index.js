import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import smoothscroll from 'smoothscroll-polyfill';

import { PRODUCTION_ENV } from './constants/environments';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import Root from './components/Root';

// Initialize Sentry error reporter only for production environment
if (process.env.NODE_ENV === PRODUCTION_ENV) {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN
  });
}

// Kick off polyfill
smoothscroll.polyfill();

// Initialize Redux store
const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// Unregister to disable service worker
serviceWorker.register();
