import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getProductById from '../../shared/api/user/products/getProductById';
import { useEffect, useState } from 'react';
import { ProductProjection } from '@commercetools/platform-sdk';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import addProductToCart from '../../shared/api/user/cart/addProductToCart';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';

const Product = (): JSX.Element => {
  const { updateActiveCart } = useActiveCartContext();

  const { slug } = useParams();

  const [product, setProduct] = useState<ProductProjection | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/404';

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const product = (await getProductById(slug!)).body;
        setProduct(product);
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

  const handleAddToCartClick = async (): Promise<void> => {
    try {
      const updatedCart = (await addProductToCart(product.id)).body;
      updateActiveCart(updatedCart);
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="product__description-wrapper">
            <Typography variant="h4" gutterBottom className="product__title">
              {productName}
            </Typography>
            <PriceElement
              additionalClassName="product__price"
              priceOriginal={productOriginalPrice}
              priceDiscounted={productDiscountedPrice}
            />
            <ButtonElement variant="outlined" title="Add To Cart" onClick={handleAddToCartClick} />
            <Typography variant="body1" className="product__description" gutterBottom>
              {productDescription}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
