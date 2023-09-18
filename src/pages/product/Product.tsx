import { Typography } from '@mui/material';
import SwiperElement from '../../widgets/swiper/Swiper';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import getProductById from '../../shared/api/user/products/getProductById';
import { useEffect, useState } from 'react';
import { LineItem, ProductProjection } from '@commercetools/platform-sdk';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import addProductToCart from '../../shared/api/user/cart/addProductToCart';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import removeProductFromCart from '../../shared/api/user/cart/removeProductFromCart';

const Product = (): JSX.Element => {
  const { activeCart, updateActiveCart } = useActiveCartContext();
  const [product, setProduct] = useState<ProductProjection | null>(null);
  const [lineItem, setLineItem] = useState<LineItem | undefined>(undefined);

  const { slug } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/404';

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const product = (await getProductById(slug!)).body;
        setProduct(product);
        setLineItem(activeCart?.lineItems.find((lineItem) => lineItem.productId === product.id));
      } catch (error) {
        navigate(from, { replace: true });
        console.log('Product not found!');
      }
    };

    fetchData();
  }, [slug, activeCart]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCartClick = async (): Promise<void> => {
    try {
      const updatedCart = (await addProductToCart(product.id)).body;
      updateActiveCart(updatedCart);
    } catch (error) {
      console.log('Unable to add product to cart on product page!');
    }
  };

  const handleRemoveFromCartClick = async (): Promise<void> => {
    try {
      if (!lineItem) {
        throw new Error('LineItem data is missing!');
      }
      const updatedCart = (await removeProductFromCart(lineItem?.id)).body;
      updateActiveCart(updatedCart);
    } catch (error) {
      console.log('Unable to remove product from cart on product page!');
    }
  };

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
          <div className="product__description-wrapper">
            <Typography variant="h4" gutterBottom className="product__title">
              {productName}
            </Typography>
            <PriceElement
              additionalClassName="product__price"
              priceOriginal={productOriginalPrice}
              priceDiscounted={productDiscountedPrice}
            />
            {!lineItem && <ButtonElement variant="contained" title="Add to Cart" onClick={handleAddToCartClick} />}
            {lineItem && (
              <ButtonElement variant="outlined" title="Remove from Cart" onClick={handleRemoveFromCartClick} />
            )}
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
