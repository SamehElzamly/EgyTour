import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persisstor=persistStore(store)
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persisstor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
