import LinkElement from '../../shared/UI/linkElement/LinkElement';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import { ProductCardProps } from '../../shared/types';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import addProductToCart from '../../shared/api/user/cart/addProductToCart';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';

const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { activeCart, updateActiveCart } = useActiveCartContext();
  const [lineItem, setLineItem] = useState(activeCart?.lineItems.find((lineItem) => lineItem.productId === props.id));
  const [productIsAdding, setProductIsAdding] = useState(false);

  useEffect(() => {
    setLineItem(activeCart?.lineItems.find((lineItem) => lineItem.productId === props.id));
  }, [activeCart]);

  const handleAddToCartClick = async (event: React.MouseEvent): Promise<void> => {
    event.preventDefault();
    setProductIsAdding(true);

    try {
      const updatedCart = (await addProductToCart(props.id)).body;
      updateActiveCart(updatedCart);
      setProductIsAdding(false);
    } catch (error) {
      console.log('Unable to add product to cart on product page!');
    }
  };

  return (
    <LinkElement additionalClassName="card" to={`/catalog/${props.id}`}>
      <div className="card__wrapper">
        <div className="card__image">
          <img src={props.image ? props.image : 'src/shared/assets/image-placeholder.svg'} alt={props.name['en-US']} />
        </div>
        <div className="card__content">
          <h2 className="card__name">{props.name['en-US']}</h2>
          <div className="card__description">
            {props.description ? props.description['en-US'] : 'Description for this product is missing!'}
          </div>
          <div className="card__footer">
            <PriceElement
              additionalClassName="card__price"
              priceOriginal={props.priceOriginal}
              priceDiscounted={props.priceDiscounted}
            />
            {!productIsAdding ? (
              !lineItem ? (
                <ButtonElement
                  additionalClassName="card__button"
                  variant="contained"
                  title="Add to Cart"
                  onClick={handleAddToCartClick}
                />
              ) : (
                <ButtonElement
                  additionalClassName="card__button button_disabled"
                  variant="outlined"
                  title="Is in Cart"
                  disabled={true}
                  onClick={handleAddToCartClick}
                />
              )
            ) : (
              <ButtonElement variant="outlined" title="">
                <CircularProgress
                  size={25}
                  className="loading-indicator loading-overlay__indicator"
                  color="secondary"
                />
              </ButtonElement>
            )}
          </div>
        </div>
      </div>
    </LinkElement>
  );
};

export default ProductCard;
