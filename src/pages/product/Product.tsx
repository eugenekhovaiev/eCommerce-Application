import { useState } from 'react';
import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import { ProductProjection } from '@commercetools/platform-sdk';

const Product = (): JSX.Element => {
  const [productsArr] = useState<ProductProjection[] | []>([]);
  return (
    <section className="product">
      <div className="container product__wrapper">
        <Typography variant="h3" gutterBottom className="product__page-title">
          Product
        </Typography>
        <div className="product__elements">
          <SwiperElement />
          <div className="product__description">
            {productsArr.map((product, index) => {
              return (
                <Typography variant="h6" gutterBottom className="product__title" key={index}>
                  {product.name}
                </Typography>
              );
            })}
            {productsArr.map((product, index) => {
              const productPrices = product.masterVariant.prices;
              const productOriginalPrice = productPrices && productPrices[0] && productPrices[0].value.centAmount;
              const productDiscountedPrice =
                productPrices && productPrices[0] && productPrices[0].discounted?.value.centAmount;
              return (
                <PriceElement
                  key={index}
                  additionalClassName="card__price"
                  priceOriginal={productOriginalPrice}
                  priceDiscounted={productDiscountedPrice}
                />
              );
            })}
            {productsArr.map((product, index) => {
              return (
                <Typography variant="body1" gutterBottom key={index}>
                  {product.description}
                </Typography>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
