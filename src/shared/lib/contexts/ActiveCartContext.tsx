import { Cart } from '@commercetools/platform-sdk';
import { ActiveCartContext } from '../../types';

import { ReactNode, createContext, useContext, useState } from 'react';

const ActiveCartContext = createContext<ActiveCartContext | undefined>(undefined);

export const useActiveCartContext = (): ActiveCartContext => {
  const context = useContext(ActiveCartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeCart, setActiveCart] = useState<Cart | undefined>(undefined);

  const updateActiveCart = (cart: Cart | undefined): void => {
    setActiveCart(cart);
  };

  return (
    <ActiveCartContext.Provider value={{ activeCart, updateActiveCart: updateActiveCart }}>
      {children}
    </ActiveCartContext.Provider>
  );
};
