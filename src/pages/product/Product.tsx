import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import ProductMessage from '../../shared/api/productMessage/productMessage';

const Product = (): JSX.Element => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [centAmount, setCentAmount] = useState(0);
  const [discountedCentAmount, setDiscountedCentAmount] = useState(0);

  useEffect(() => {
    const product = ProductMessage.body;

    setName(product.name['en-US']);
    setDescription(product.description['en-US']);
    setCentAmount(product.masterVariant.prices[0].value.centAmount);
    setDiscountedCentAmount(product.masterVariant.prices[0].discounted.value.centAmount);
  }, []);
  return (
    <section className="product">
      <div className="container product__wrapper">
        <Typography variant="h3" gutterBottom className="product__page-title">
          Product
        </Typography>
        <div className="product__elements">
          <SwiperElement />
          <div className="product__description">
            <Typography variant="h4" gutterBottom className="product__title">
              {name}
            </Typography>
            <PriceElement
              additionalClassName="card__price product__price"
              priceOriginal={centAmount}
              priceDiscounted={discountedCentAmount}
            />
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
