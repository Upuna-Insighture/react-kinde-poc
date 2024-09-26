import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {KindeProvider} from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KindeProvider
      clientId="144f126330ed44efb81b4d5d8ecc4643"
      domain="https://insupuna.kinde.com"
      redirectUri="https://react-kinde-poc-blush.vercel.app"
      logoutUri="https://react-kinde-poc-blush.vercel.app"
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
