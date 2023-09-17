import SpinnerInput from '../inputs/SpinnerInput';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { BasketItemProps } from '../../shared/types';
import removeProductFromCart from '../../shared/api/user/cart/removeProductFromCart';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import PriceElement from '../../shared/UI/priceElement/PriceElement';

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

  const handleOnClick = async (id: string): Promise<void> => {
    const updatedCart = (await removeProductFromCart(id)).body;
    updateActiveCart(updatedCart);
  };

  return (
    <div className="cart-items__item">
      <div className="cart-items__image">
        <img className="image" src={image} alt={name} />
      </div>
      <div className="cart-items__name">{name}</div>
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
          priceOriginal={priceDiscounted ? priceOriginal * quantity : total}
          priceDiscounted={priceDiscounted ? total : undefined}
        />
      </div>
      <div className="cart-items__close">
        <ButtonElement title="+" onClick={(): Promise<void> => handleOnClick(id)} />
      </div>
    </div>
  );
};

export default BasketItem;
