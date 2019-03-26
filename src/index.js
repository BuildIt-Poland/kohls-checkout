import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// Register to enable service worker
serviceWorker.unregister();
