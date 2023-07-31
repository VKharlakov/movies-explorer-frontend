import './index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';

//Translation
import './vendor/i18next/i18next'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
