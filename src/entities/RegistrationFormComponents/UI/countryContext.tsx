import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CountryContextType {
  selectedShippingCountry: string;
  setSelectedShippingCountry: (country: string) => void;
  selectedBillingCountry: string;
  setSelectedBillingCountry: (country: string) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

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

export const useCountryContext = (): CountryContextType => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryContext');
  }
  return context;
};
