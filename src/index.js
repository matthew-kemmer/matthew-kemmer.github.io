import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './assets/App.css';
import Header from  './pages/header/header.js';
import Footer from './pages/footer/footer.js';
import { AppRoutes, ScrollToTop } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
        <AppRoutes />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
