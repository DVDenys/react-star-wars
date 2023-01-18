import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@store/store';

import { REPO_NAME }from '@constants/repo'

import ThemeProvider from '@context/ThemeProvider';
import App from '@containers/App';

import '@styles/index.css';
 
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
