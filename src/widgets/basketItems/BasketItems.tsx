import BasketItem from '../../entities/basket/BasketItem';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';
import createCart from '../../shared/api/user/cart/createCart';
import deleteCart from '../../shared/api/user/cart/deleteCart';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
import { BasketItemsProps } from '../../shared/types';

const BasketItems = (props: BasketItemsProps): JSX.Element => {
  const { updateActiveCart } = useActiveCartContext();

  const clearCart = async (): Promise<void> => {
    await deleteCart();
    const newCart = (await createCart()).body;
    updateActiveCart(newCart);
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
        <ButtonElement title="Clear cart" onClick={clearCart} />
      </div>
    </div>
  );
};

export default BasketItems;
