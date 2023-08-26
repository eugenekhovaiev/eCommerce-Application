import './App/styles/sass/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';

import { LoggedInProvider } from './shared/lib/contexts/LoggedInContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoggedInProvider>
        <App />
      </LoggedInProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
