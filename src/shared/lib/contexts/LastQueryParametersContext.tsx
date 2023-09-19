import React, { createContext, useContext, useState, ReactNode } from 'react';

import { LastQueryParametersContext, ProductsQueryParams } from '../../types';

const LastQueryParametersContext = createContext<LastQueryParametersContext | undefined>(undefined);

export const useLastQueryParametersContext = (): LastQueryParametersContext => {
  const context = useContext(LastQueryParametersContext);
  if (!context) {
    throw new Error('useLastQueryParametersContext must be used within a LastQueryProvider');
  }
  return context;
};

export const LastQueryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lastQueryParameters, setLastQueryParameters] = useState<ProductsQueryParams | undefined>(undefined);

  const updateLastQueryParameters = (queryParameters: ProductsQueryParams): void => {
    setLastQueryParameters(queryParameters);
  };

  return (
    <LastQueryParametersContext.Provider value={{ lastQueryParameters, updateLastQueryParameters }}>
      {children}
    </LastQueryParametersContext.Provider>
  );
};
