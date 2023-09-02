import { Typography } from '@mui/material';

const Product = (): JSX.Element => {
  return (
    <section className="product">
      <div className="container product__wrapper">
        <Typography variant="h3" gutterBottom className="product__title">
          Product
        </Typography>
      </div>
    </section>
  );
};

export default Product;
