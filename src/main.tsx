import './app/sass/main.scss';

// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';

import { UserDataProvider } from './shared/lib/contexts/UserDataContext.tsx';
import { ProductsArrayProvider } from './shared/lib/contexts/ProductsArrayContext.tsx';
import { LastQueryProvider } from './shared/lib/contexts/LastQueryParametersContext.tsx';
import { CartContextProvider } from './shared/lib/contexts/ActiveCartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserDataProvider>
      <CartContextProvider>
        <ProductsArrayProvider>
          <LastQueryProvider>
            <App />
          </LastQueryProvider>
        </ProductsArrayProvider>
      </CartContextProvider>
    </UserDataProvider>
  </BrowserRouter>,
);
