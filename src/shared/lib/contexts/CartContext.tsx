import { Cart } from '@commercetools/platform-sdk';
import { CartContext } from '../../types';

import { ReactNode, createContext, useContext, useState } from 'react';

const CartContext = createContext<CartContext | undefined>(undefined);

export const useCartContext = (): CartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | undefined>(undefined);

  const updateCart = (cart: Cart | undefined): void => {
    setCart(cart);
  };

  return <CartContext.Provider value={{ cart, updateCart }}>{children}</CartContext.Provider>;
};
