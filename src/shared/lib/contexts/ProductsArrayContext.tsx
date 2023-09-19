import { ProductProjection } from '@commercetools/platform-sdk';
import { ProductsArrayContext } from '../../types';

import { ReactNode, createContext, useContext, useState } from 'react';

const ProductsArrayContext = createContext<ProductsArrayContext | undefined>(undefined);

export const useProductsArrayContext = (): ProductsArrayContext => {
  const context = useContext(ProductsArrayContext);
  if (!context) {
    throw new Error('useProductsArrayContext must be used within a ProductsArrayProvider');
  }
  return context;
};

export const ProductsArrayProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productsArray, setProductsArray] = useState<ProductProjection[] | []>([]);

  const updateProductsArray = (productsArray: ProductProjection[] | []): void => {
    setProductsArray(productsArray);
  };

  return (
    <ProductsArrayContext.Provider value={{ productsArray, updateProductsArray }}>
      {children}
    </ProductsArrayContext.Provider>
  );
};
