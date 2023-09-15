import BasketItems from '../../widgets/basketItems/BasketItems';
import Coupon from '../../widgets/coupon/Coupon';
import TotalCost from '../../widgets/totalCost/TotalCost';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import emptyBag from '../../shared/assets/empty-bag.svg';
import { useCartContext } from '../../shared/lib/contexts/CartContext';

const Cart = (): JSX.Element => {
  const { cart } = useCartContext();

  return (
    <main className="cart">
      {cart && cart?.lineItems.length !== 0 ? (
        <div className="container cart__container">
          <div className="cart__items-wrapper">
            <BasketItems cartItems={cart?.lineItems} />
          </div>
          <div className="cart__coupon-wrapper">
            <Coupon />
          </div>
          <div className="cart__total-cost-wrapper">
            <TotalCost subtotal={cart?.totalPrice.centAmount} total={cart?.totalPrice.centAmount} />
          </div>
        </div>
      ) : (
        <div className="container cart__container">
          <div className="cart__empty-wrapper">
            <div className="cart-empty">
              <div className="cart-empty__image">
                <ImageElement src={emptyBag} alt="empty bag" />
              </div>
              <h3 className="cart-empty__title">Your shopping cart is empty</h3>
              <p className="cart-empty__helper-text">Looks like you have not added anything to your cart</p>
              <LinkElement additionalClassName="cart-empty__link" title="Continue Shopping" to="/catalog" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
