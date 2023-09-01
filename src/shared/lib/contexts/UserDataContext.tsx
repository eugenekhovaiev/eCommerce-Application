import { Customer } from '@commercetools/platform-sdk';
import { UserDataContext } from '../../types';

import { ReactNode, createContext, useContext, useState } from 'react';

const UserDataContext = createContext<UserDataContext | undefined>(undefined);

export const useUserDataContext = (): UserDataContext => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserDataContext must be used within a HeaderProvider');
  }
  return context;
};

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<Customer | undefined>(undefined);

  const updateUserData = (userData: Customer | undefined): void => {
    setUserData(userData);
  };

  return <UserDataContext.Provider value={{ userData, updateUserData }}>{children}</UserDataContext.Provider>;
};
