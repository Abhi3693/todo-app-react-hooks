import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store';
import App from './component/App';
import './style/style.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

let root = createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
