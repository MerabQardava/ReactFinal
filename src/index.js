import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./AppProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
          <BrowserRouter>
              <Navbar/>
              <App />
          </BrowserRouter>
      </AppProvider>
  </React.StrictMode>
);

