import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css'
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './config/react-auth0-spa';
import history from './config/history';
import dotenv from 'dotenv';
dotenv.config();

// A function that routes the user to the right place after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    client_id={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirect_uri={`${window.location.origin}/portal/profile`}
    audience={process.env.REACT_APP_AUTH_AUDIENCE}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();