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
      <BasketItem
        name="Show Leash for Medium-Sized Dogs"
        image="src/shared/assets/image-example.jpg"
        price={100}
        quantity={1}
      />
      <BasketItem
        name="Show Leash for Medium-Sized Dogs"
        image="src/shared/assets/image-example.jpg"
        price={114}
        quantity={1}
      />
    </div>
  );
};

export default BasketItems;
