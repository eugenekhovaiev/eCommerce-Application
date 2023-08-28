import { LoggedInContext } from '../../types';

import { ReactNode, createContext, useContext, useState } from 'react';

const LoggedInContext = createContext<LoggedInContext | undefined>(undefined);

export const useLoggedInContext = (): LoggedInContext => {
  const context = useContext(LoggedInContext);
  if (!context) {
    throw new Error('useLoggedInContext must be used within a HeaderProvider');
  }
  return context;
};

export const LoggedInProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoggedIn = (isLoggedIn: boolean): void => {
    setIsLoggedIn(isLoggedIn);
  };

  return <LoggedInContext.Provider value={{ isLoggedIn, updateLoggedIn }}>{children}</LoggedInContext.Provider>;
};
