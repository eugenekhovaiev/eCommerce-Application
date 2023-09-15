import SpinnerInput from '../inputs/SpinnerInput';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { BasketItemProps } from '../../shared/types';
import removeProductFromCart from '../../shared/api/user/cart/removeProductFromCart';
import { useCartContext } from '../../shared/lib/contexts/CartContext';

const BasketItem = (props: BasketItemProps): JSX.Element => {
  const quantity = props.lineItem.quantity;
  const price = props.lineItem.price.discounted?.value.centAmount || props.lineItem.price.value.centAmount;
  const total = props.lineItem.totalPrice.centAmount;
  const image =
    props.lineItem.variant.images && props.lineItem.variant.images.length !== 0
      ? props.lineItem.variant.images[0].url
      : 'src/shared/assets/image-placeholder.svg';
  const name = props.lineItem.name['en-US'];
  const id = props.lineItem.id;
  const { updateCart } = useCartContext();

  const handleOnClick = async (id: string): Promise<void> => {
    const response = await removeProductFromCart(id);
    updateCart(response.body);
  };

  return (
    <div className="cart-items__item">
      <div className="cart-items__image">
        <img src={image} alt={'example'} />
      </div>
      <div className="cart-items__name">{name}</div>
      <div className="cart-items__price">{`$${(+price / 100).toFixed(2)}`}</div>
      <div className="cart-items__quantity">
        <SpinnerInput id={id} value={quantity} />
      </div>
      <div className="cart-items__total">
        <span className="title">Total: </span>
        {`$${(+total / 100).toFixed(2)}`}
      </div>
      <div className="cart-items__close">
        <ButtonElement title="+" onClick={(): Promise<void> => handleOnClick(id)} />
      </div>
    </div>
  );
};

export default BasketItem;
