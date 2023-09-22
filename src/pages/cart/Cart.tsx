import BasketItems from '../../widgets/basketItems/BasketItems';
import Coupon from '../../widgets/coupon/Coupon';
import TotalCost from '../../widgets/totalCost/TotalCost';
import ImageElement from '../../shared/UI/imageElement/ImageElement';
import LinkElement from '../../shared/UI/linkElement/LinkElement';
import emptyBag from '../../shared/assets/empty-bag.svg';
import { useActiveCartContext } from '../../shared/lib/contexts/ActiveCartContext';
// import getDiscountCodeById from '../../shared/api/user/cart/getDiscountCodeById';

const Cart = (): JSX.Element => {
  const { activeCart } = useActiveCartContext();
  const subtotal = activeCart?.lineItems.reduce((sum, item) => sum + item.price.value.centAmount * item.quantity, 0);
  // (async function (): Promise<void> {
  //   // const id = activeCart?.discountCodes[0].discountCode.id;
  //   // const resp = await getDiscountCodeById(id || '');
  //   const resp = await getDiscountCodeById('fe975518-3560-4e54-9096-b737d0d21540');
  //   console.log(activeCart);
  //   console.log(resp);
  // })();

  return (
    <main className="cart">
      {activeCart && activeCart?.lineItems.length !== 0 ? (
        <div className="container cart__container">
          <div className="cart__items-wrapper">
            <BasketItems cartItems={activeCart?.lineItems} />
          </div>
          <div className="cart__coupon-wrapper">
            <Coupon />
          </div>
          <div className="cart__total-cost-wrapper">
            <TotalCost
              subtotal={subtotal}
              total={activeCart?.totalPrice.centAmount}
              discount={subtotal ? subtotal - activeCart?.totalPrice.centAmount : 0}
            />
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
