import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from 'react-redux'
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './UserReduser'
const store =configureStore({
  reducer:{
   users:userReducer
  }
})
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
