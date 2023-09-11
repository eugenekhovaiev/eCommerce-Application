import BasketItems from '../../widgets/basketItems/BasketItems';

const Cart = (): JSX.Element => {
  return (
    <main className="cart">
      <div className="container cart__container">
        <div className="cart__items-wrapper">
          <BasketItems />
        </div>
        <div className="cart__coupon-wrapper">coupon</div>
        <div className="cart__total-cost-wrapper">total cost</div>
      </div>
    </main>
  );
};

export default Cart;
