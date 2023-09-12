import BasketItems from '../../widgets/basketItems/BasketItems';
import Coupon from '../../widgets/coupon/Coupon';

const Cart = (): JSX.Element => {
  return (
    <main className="cart">
      <div className="container cart__container">
        <div className="cart__items-wrapper">
          <BasketItems />
        </div>
        <div className="cart__coupon-wrapper">
          <Coupon />
        </div>
        <div className="cart__total-cost-wrapper">total cost</div>
      </div>
    </main>
  );
};

export default Cart;
