import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppProvider from "./AppProvider";
import { Auth0Provider } from "@auth0/auth0-react";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={`dev-93klpe8f.us.auth0.com`}
      clientId={`${CLIENT_ID}`}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <AppProvider>
        <App />
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
