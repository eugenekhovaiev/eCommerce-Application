import { useState } from 'react';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import getProducts from '../../shared/api/user/getProducts';
import ProductCard from '../../entities/productCard/ProductCard';
import { ProductProjection } from '@commercetools/platform-sdk';

const Catalog = (): JSX.Element => {
  const [productsArr, setProductsArr] = useState<ProductProjection[] | []>([]);

  const handleClick = async (): Promise<void> => {
    try {
      const productsObj = await getProducts({
        // sort: { by: 'name.en-US', order: 'asc' },
        // filters: { categoriesIds: '1ce34364-a540-4fc4-a3dd-13c2ba382c79' },
        // filters: { attributes: [{ enumName: 'color', value: 'Pink' }] },
        // filters: { attributes: [{ enumName: 'size', value: 'Medium' }] },
        // filters: { searchKeywords: 'skinny' },
      });
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
