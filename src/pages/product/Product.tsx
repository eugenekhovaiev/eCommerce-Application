import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';

const Product = (): JSX.Element => {
  return (
    <section className="product">
      <div className="container product__wrapper">
        <Typography variant="h3" gutterBottom className="product__title">
          Product
        </Typography>
        <SwiperElement />
        
      </div>
    </section>
  );
};

export default Product;
