import BasketItem from '../../entities/basket/BasketItem';

const BasketItems = (): JSX.Element => {
  return (
    <div className="cart-items">
      <div className="cart-items__item cart-items__item_header">
        <div className="cart-items__name">Added Items</div>
        <div className="cart-items__price">Price</div>
        <div className="cart-items__quantity">Quantity</div>
        <div className="cart-items__total">Total</div>
      </div>
      <BasketItem />
      <BasketItem />
    </div>
  );
};

export default BasketItems;
