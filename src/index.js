import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';
import App from './components/App.js';
import Header from './components/Header.js'

ReactDOM.render(
  <React.StrictMode>
  <header>
    <Header/>

  </header>

  </React.StrictMode>,
  document.getElementById('root')
);
