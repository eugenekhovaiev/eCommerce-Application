import SpinnerInput from '../inputs/SpinnerInput';
import PriceElement from '../../shared/UI/priceElement/PriceElement';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import { BasketItemProps } from '../../shared/types';
import removeProductFromCart from '../../shared/api/user/cart/removeProductFromCart';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import closeIcon from '../../shared/assets/close.svg';

const BasketItem = (props: BasketItemProps): JSX.Element => {
  const quantity = props.lineItem.quantity;
  const priceOriginal = props.lineItem.price.value.centAmount;
  const priceDiscounted =
    props.lineItem.discountedPricePerQuantity.length !== 0
      ? props.lineItem.discountedPricePerQuantity[0].discountedPrice.value.centAmount
      : props.lineItem.price.discounted?.value.centAmount;
  const total = props.lineItem.totalPrice.centAmount;
  const image =
    props.lineItem.variant.images && props.lineItem.variant.images.length !== 0
      ? props.lineItem.variant.images[0].url
      : 'src/shared/assets/image-placeholder.svg';
  const name = props.lineItem.name['en-US'];
  const id = props.lineItem.id;
  const { updateActiveCart } = useActiveCartContext();

  const handleRemoveFromCartClick = async (): Promise<void> => {
    try {
      const updatedCart = (await removeProductFromCart(id)).body;
      updateActiveCart(updatedCart);
    } catch (error) {
      console.log('Unable to remove product from cart on cart page!');
    }
  };

  return (
    <div className="cart-items__item">
      <div className="cart-items__image">
        <img className="image" src={image} alt={name} />
      </div>
      <div className="cart-items__name">
        <LinkElement title={name} to={`/catalog/${props.lineItem.productId}`} />
      </div>
      <div className="cart-items__price">
        <PriceElement
          additionalClassName={props.lineItem.discountedPricePerQuantity.length !== 0 ? 'price_discounted' : ''}
          priceOriginal={priceOriginal}
          priceDiscounted={priceDiscounted}
        />
      </div>
      <div className="cart-items__quantity">
        <SpinnerInput id={id} value={quantity} />
      </div>
      <div className="cart-items__total">
        <span className="title">Total: </span>
        <PriceElement
          additionalClassName={props.lineItem.discountedPricePerQuantity.length !== 0 ? 'price_discounted' : ''}
          priceOriginal={priceDiscounted !== undefined ? priceOriginal * quantity : total}
          priceDiscounted={priceDiscounted !== undefined ? total : undefined}
        />
      </div>
      <div className="cart-items__close" onClick={handleRemoveFromCartClick}>
        <ImageElement src={closeIcon} alt="close" additionalClassName="icon" />
      </div>
    </div>
  );
};

export default BasketItem;
