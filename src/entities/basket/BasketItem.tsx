import { useState } from 'react';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import SpinnerInput from '../inputs/SpinnerInput';
import { BasketItemProps } from '../../shared/types';

const BasketItem = (props: BasketItemProps): JSX.Element => {
  const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 0);

  const price = props.price ? `$${(+props.price / 100).toFixed(2)}` : 'Price is missing!';
  const total = props.price ? `$${((+props.price * quantity) / 100).toFixed(2)}` : '$0.00';

  return (
    <div className="cart-items__item">
      <div className="cart-items__image">
        <img src={props.image} alt={'example'} />
      </div>
      <div className="cart-items__name">{props.name}</div>
      <div className="cart-items__price">{price}</div>
      <div className="cart-items__quantity">
        <SpinnerInput value={quantity} setQuantity={setQuantity} />
      </div>
      <div className="cart-items__total">
        <span className="title">Total: </span>
        {total}
      </div>
      <div className="cart-items__close">
        <ButtonElement title="+" />
      </div>
    </div>
  );
};

export default BasketItem;
