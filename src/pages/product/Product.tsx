import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import ProductMessage from '../../shared/api/productMessage/productMessage';

const Product = (): JSX.Element => {
  return (
    <section className="product">
      <div className="container product__wrapper">
        <Typography variant="h3" gutterBottom className="product__page-title">
          Product
        </Typography>
        <div className="product__elements">
          <SwiperElement />
          <div className="product__description">
            <Typography variant="h6" gutterBottom className="product__title">
              {ProductMessage.body.name['en-US']}
            </Typography>
            <PriceElement
              additionalClassName="card__price"
              priceOriginal={ProductMessage.body.masterVariant.prices[0].value.centAmount}
              priceDiscounted={ProductMessage.body.masterVariant.prices[0].discounted.value.centAmount}
            />
            <Typography variant="body1" gutterBottom>
              {ProductMessage.body.description['en-US']}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
