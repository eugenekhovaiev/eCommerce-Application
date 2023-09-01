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
        // filters: { categoriesIds: '133fbd9e-8fb8-465e-b008-699700693da4' },
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
        <div className="cards">
          {productsArr.map((product, index) => {
            const productImages = product.masterVariant.images;
            const productPreviewUrl = productImages && productImages[0] && productImages[0].url;

            const productPrices = product.masterVariant.prices;
            const productOriginalPrice = productPrices && productPrices[0] && productPrices[0].value.centAmount;
            const productDiscountedPrice =
              productPrices && productPrices[0] && productPrices[0].discounted?.value.centAmount;

            return (
              <ProductCard
                url={product.slug['en-US']}
                image={productPreviewUrl}
                name={product.name}
                priceOriginal={productOriginalPrice}
                priceDiscounted={productDiscountedPrice}
                description={product.description}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Catalog;
