import BasketItem from '../../entities/basket/BasketItem';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import { BasketItemsProps } from '../../shared/types';

const BasketItems = (props: BasketItemsProps): JSX.Element => {
  const handleOnClick = (): void => {
    // props.setCart(props.);
  };
  return (
    <div className="cart-items">
      <div className="cart-items__item cart-items__item_header">
        <div className="cart-items__name">Added Items</div>
        <div className="cart-items__price">Price</div>
        <div className="cart-items__quantity">Quantity</div>
        <div className="cart-items__total">Total</div>
      </div>
      {props.cartItems && props.cartItems.map((item) => <BasketItem key={item.name['en-US']} lineItem={item} />)}
      <div className="cart-items__clear-button">
        <ButtonElement title="Clear cart" onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default BasketItems;
