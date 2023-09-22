import React, { createContext, useContext, useState, ReactNode } from 'react';

import { FilterContext } from '../../types';

const FilterContext = createContext<FilterContext | undefined>(undefined);

export const useFilterContext = (): FilterContext => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterContext');
  }
  return context;
};

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCategoryUpdated, setIsCategoryUpdated] = useState(false);

  const updateIsCategoryUpdated = (isCategoryUpdated: boolean): void => {
    setIsCategoryUpdated(isCategoryUpdated);
  };
  return (
    <FilterContext.Provider value={{ isCategoryUpdated, updateIsCategoryUpdated }}>{children}</FilterContext.Provider>
  );
};
