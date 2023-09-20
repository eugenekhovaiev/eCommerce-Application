import React, { createContext, useContext, useState, ReactNode } from 'react';

import { CountryContext } from '../../types';

const CountryContext = createContext<CountryContext | undefined>(undefined);

export const useCountryContext = (): CountryContext => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};

export const CountryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedShippingCountry, setSelectedShippingCountry] = useState('');
  const [selectedBillingCountry, setSelectedBillingCountry] = useState('');

  return (
    <CountryContext.Provider
      value={{ selectedShippingCountry, setSelectedShippingCountry, selectedBillingCountry, setSelectedBillingCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};
