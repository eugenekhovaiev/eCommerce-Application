import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getProductById from '../../shared/api/user/getProductById';
import { useEffect, useState } from 'react';
import { ProductProjection } from '@commercetools/platform-sdk';

const Product = (): JSX.Element => {
  const { slug } = useParams();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/404';

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await getProductById(slug as string);
        setProduct(response.body);
      } catch (error) {
        navigate(from, { replace: true });
        console.log('Product not found!');
      }
    };

    fetchData();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const productName = product.name['en-US'];
  const productDescription = product.description
    ? product.description['en-US']
    : 'Description for this product is missing!';

  const productImages = product.masterVariant.images;

  const productPrices = product.masterVariant.prices;
  const productOriginalPrice = productPrices && productPrices[0] && productPrices[0].value.centAmount;
  const productDiscountedPrice = productPrices && productPrices[0] && productPrices[0].discounted?.value.centAmount;

  return (
    <section className="product">
      <div className="container product__wrapper">
        <div className="product__elements">
          <SwiperElement
            images={
              productImages
                ? productImages
                : [{ url: 'src/shared/assets/image-placeholder.svg', dimensions: { w: 100, h: 100 } }]
            }
          />
          <div className="product__description">
            <Typography variant="h4" gutterBottom className="product__title">
              {productName}
            </Typography>
            <PriceElement
              additionalClassName="product__price"
              priceOriginal={productOriginalPrice}
              priceDiscounted={productDiscountedPrice}
            />
            <Typography variant="body1" gutterBottom>
              {productDescription}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
