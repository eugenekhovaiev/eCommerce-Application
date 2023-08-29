import { useState } from 'react';
// import ImageElement from '../../shared/UI/imageElement/ImageElement';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import ProductCard from '../../entities/productCard/ProductCard';
import { Product } from '@commercetools/platform-sdk';
// import { ProductCardProps } from '../../shared/types';

const Catalog = (): JSX.Element => {
  const [productsArr, setProductsArr] = useState<Product[] | []>([]);

  const handleClick = async (): Promise<void> => {
    try {
      const productsObj = await getProducts();
      console.log(productsObj);
      setProductsArr(productsObj.body.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="catalog">
      <div className="container catalog__container">
        <h2 className="catalog__title">Catalog page content will be here.</h2>
        <LinkElement title="Show products" onClick={handleClick} to="/catalog" />
        {productsArr.map((product, index) => {
          const productImages = product.masterData.current.masterVariant.images;
          const productPreviewUrl =
            productImages && productImages[0] ? productImages[0].url : 'src/shared/assets/image-placeholder.svg';
          return (
            <ProductCard
              image={productPreviewUrl}
              name={product.masterData.current.name}
              description={product.masterData.current.description}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Catalog;
