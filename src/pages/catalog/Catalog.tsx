import { useState } from 'react';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import ProductCard from '../../entities/productCard/ProductCard';
import { ProductProjection } from '@commercetools/platform-sdk';

const Catalog = (): JSX.Element => {
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);

  const handleClick = async (): Promise<void> => {
    try {
      const productsObj = await getProducts({ sort: { by: 'price', order: 'asc' } });
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
          const productImages = product.masterVariant.images;
          const productPreviewUrl =
            productImages && productImages[0] ? productImages[0].url : 'src/shared/assets/image-placeholder.svg';

          const productPrices = product.masterVariant.prices;
          const productPrice =
            productPrices && productPrices[0] ? productPrices[0].value.centAmount : 'Price is missing';
          return (
            <ProductCard
              image={productPreviewUrl}
              name={product.name}
              price={productPrice}
              description={product.description}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Catalog;
