import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './login.scss';
import LoginRouter from './Router/LoginRouter';
import * as serviceWorker from './serviceWorker';
import { ContextProvider } from './Context/Context';

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <LoginRouter />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
