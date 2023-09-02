import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';

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
              Name of product
            </Typography>
            <Typography variant="subtitle2" gutterBottom className="product__price-promotion">
              promotion price
            </Typography>
            <Typography variant="subtitle1" gutterBottom className="product__price-regular">
              Regular price:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
              beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
              deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
