import { ReactNode, createContext, useContext, useState } from 'react';

interface HeaderContextType {
  isLoggedIn: boolean;
  updateHeader: (isLoggedIn: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeaderContext = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
};

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const updateHeader = (isLoggedIn: boolean): void => {
    setisLoggedIn(isLoggedIn);
  };

  return <HeaderContext.Provider value={{ isLoggedIn, updateHeader }}>{children}</HeaderContext.Provider>;
};
