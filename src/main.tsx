import './app/sass/main.scss';

// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';

import { UserDataProvider } from './shared/lib/contexts/UserDataContext.tsx';
import { CartContextProvider } from './shared/lib/contexts/ActiveCartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserDataProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserDataProvider>
  </BrowserRouter>,
);
