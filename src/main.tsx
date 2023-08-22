import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';

import { HeaderProvider } from './widgets/header/HeaderContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
