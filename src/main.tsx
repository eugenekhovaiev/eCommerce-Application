/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';

import { getCustomers } from './shared/api/admin-client/admin-client.ts';

getCustomers().then(({ body }) => {
  console.log(JSON.stringify(body, null, 2));
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
