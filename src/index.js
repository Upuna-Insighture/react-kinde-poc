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
      clientId="090643cdca934101849f5e549317d0ae"
      domain="https://insupuna.kinde.com"
      redirectUri="http://localhost:3000"
      logoutUri="http://localhost:3000"
    >
      <App />
    </KindeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
