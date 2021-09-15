import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from "./context/AuthContext";
//import DataProvider from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
